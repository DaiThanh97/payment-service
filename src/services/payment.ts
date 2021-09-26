import { Context } from 'mali';
import { getCustomRepository, getManager } from 'typeorm';
import { TransactionRepository } from './../repository/transaction';
import {
  JwtPayload,
  errorHandler,
  InternalError,
} from '@galaxy-fortune/common';
import {
  GetAllTransactionRequest,
  GetAllTransactionResponse,
  PaymentType,
  RechargeWithStripeRequest,
  RechargeWithStripeResponse,
  TransactionModel,
  RechargeWithSkrillRequest,
  RechargeWithSkrillResponse,
  SkrillStatusModel,
  UpdateSkrillTransactionStatusRequest,
  UpdateSkrillTransactionStatusResponse
} from '../schemas/payment_pb';
import stripeUtils from '../utils/stripe';
import SettingsPublisher from '../publishers/settings';
import UserPublisher from '../publishers/user';
import { ERROR_NAME_PAYMENT, NOTI_PAYMENT } from '../constants/noti';
import { SKRILL_URL } from '../constants/env';
import SkrillUtils from '../utils/skrill';
import CommonUtils from './../utils/common';
import {
  CHARGE_STRIPE_STATUS,
  CURRENCY
} from '../constants/common';

//////////////////////////
//// RECHARGE STRIPE /////
/////////////////////////
const rechargeWithStripe = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as RechargeWithStripeRequest).toObject();
  const { amountInUsd, description, stripeToken } = request;
  const { id } = (ctx as any).payload as JwtPayload;

  // Call charge to Stripe
  const charge = await stripeUtils.charges.create({
    currency: CURRENCY,
    amount: amountInUsd * 100,
    source: stripeToken,
    description
  });

  // Charge not success
  if (charge.status !== CHARGE_STRIPE_STATUS.SUCCEEDED) {
    const transRepo = getCustomRepository(TransactionRepository);
    await transRepo.insertTransaction(
      id,
      amountInUsd,
      0,
      0,
      PaymentType.PAYMENT_TYPE_STRIPE,
      charge.id,
      charge.status
    );

    throw new InternalError(
      NOTI_PAYMENT.CHARGE_FAILED,
      ERROR_NAME_PAYMENT.CHARGE_FAILED
    );
  }

  // Call to Settings Service
  const { usdToGoldCoins, usdToSweepCoins } = await SettingsPublisher.retrieveSettings();
  // Calculate money
  const sweepCoins = CommonUtils.calculateMoneyRatio(amountInUsd, usdToSweepCoins);
  const goldCoins = CommonUtils.calculateMoneyRatio(amountInUsd, usdToGoldCoins);

  // Begin transaction DB
  let insertId = 0;
  await getManager().transaction("SERIALIZABLE", async manager => {
    const transactionRepository = await manager.getCustomRepository(TransactionRepository);
    const result = await transactionRepository.insertTransaction(
      id,
      amountInUsd,
      sweepCoins,
      goldCoins,
      PaymentType.PAYMENT_TYPE_STRIPE,
      charge.id,
      charge.status
    );
    insertId = result.identifiers[0].id;

    // Call to User Service to add money
    await UserPublisher.addCoinsToPlayer(id, goldCoins, sweepCoins);
  });

  // Response
  const response = new RechargeWithStripeResponse();
  const transactionModel = new TransactionModel();
  transactionModel.setId(insertId);
  transactionModel.setUserId(id.toString());
  transactionModel.setAmountInUsd(amountInUsd);
  transactionModel.setTransactionGoldCoins(goldCoins);
  transactionModel.setTransactionSweepCoins(sweepCoins);
  transactionModel.setPaymentType(PaymentType.PAYMENT_TYPE_STRIPE);
  transactionModel.setPaymentId(charge.id);
  response.setTransaction(transactionModel);
  ctx.res = response;
});

///////////////////////////////
//// GET ALL TRANSACTION /////
/////////////////////////////
const getAllTransaction = errorHandler(async (ctx: Context<any>) => {
  const request = ctx.req as GetAllTransactionRequest;
  const from = request.getFrom();
  const to = request.getTo();

  if (!from || !to) {
    ctx.res = new GetAllTransactionResponse();
    return;
  }

  const fromDate = from.toDate().toISOString();
  const toDate = to.toDate().toISOString();

  // Get all transaction from DB
  const transactionRepository = getCustomRepository(TransactionRepository);
  const transactions = await transactionRepository.getAllTransactionsBetweenDates(fromDate, toDate);

  const listTransaction: TransactionModel[] = [];
  transactions.forEach(trans => {
    const transModel = new TransactionModel();
    transModel.setId(trans.id);
    transModel.setUserId(trans.userId.toString());
    transModel.setAmountInUsd(trans.amountInUsd);
    transModel.setTransactionGoldCoins(trans.transactionGoldCoins);
    transModel.setTransactionSweepCoins(trans.transactionSweepCoins);
    transModel.setPaymentType((<any>PaymentType)[trans.paymentType]);
    transModel.setPaymentId(trans.paymentId);
    listTransaction.push(transModel);
  });

  // Response
  const response = new GetAllTransactionResponse();
  response.setTransactionsList(listTransaction);
  ctx.res = response;
});

//////////////////////////
//// RECHARGE SKRILL /////
/////////////////////////
const rechargeWithSkrill = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as RechargeWithSkrillRequest).toObject();
  const { amountInUsd } = request;
  const payload = (ctx as any).payload as JwtPayload;

  // Call to Settings Service
  const { usdToGoldCoins, usdToSweepCoins } = await SettingsPublisher.retrieveSettings();
  // Calculate money
  const goldCoins = CommonUtils.calculateMoneyRatio(amountInUsd, usdToGoldCoins);
  const sweepCoins = CommonUtils.calculateMoneyRatio(amountInUsd, usdToSweepCoins);

  // Create transaction ID
  let transactionId = 0;
  let sessionId = '';
  await getManager().transaction("SERIALIZABLE", async manager => {
    const transactionRepository = await manager.getCustomRepository(TransactionRepository);
    const insertResult = await transactionRepository.insertTransaction(
      payload.id,
      amountInUsd,
      sweepCoins,
      goldCoins,
      PaymentType.PAYMENT_TYPE_SKRILL,
      '',
      Object.keys(SkrillStatusModel)[SkrillStatusModel.STATUS_CREATED]
    );
    transactionId = +insertResult.identifiers[0].id;

    // Get session ID from Skrill
    const sessionIdResponse = await SkrillUtils.requestSessionId(
      amountInUsd,
      transactionId
    );

    // Check if sthing wrong with sId
    if (!sessionIdResponse) {
      throw new InternalError(
        NOTI_PAYMENT.ERROR_SKRILL_RESPONSE_SESSION,
        ERROR_NAME_PAYMENT.ERROR_SKRILL_RESPONSE_SESSION
      );
    }
    sessionId = sessionIdResponse;

    // Update Skrill session Id
    const updateResult = await transactionRepository.updateSkrillSession(
      transactionId,
      sessionIdResponse
    );
    const { raw } = updateResult;
    if (!raw || raw.affectedRows <= 0) {
      throw new InternalError(
        NOTI_PAYMENT.ERROR_UPDATE_SESSION,
        ERROR_NAME_PAYMENT.ERROR_UPDATE_SESSION
      );
    }
  });
  const paymentLink = `${SKRILL_URL}/app/?sid=${sessionId}`;

  // Response
  const response = new RechargeWithSkrillResponse();
  response.setId(transactionId);
  response.setUserId(payload.id.toString());
  response.setAmountInUsd(amountInUsd);
  response.setSessionId(sessionId);
  response.setPaymentLink(paymentLink);
  ctx.res = response;
});

///////////////////////////////
//// UPDATE SKRILL STATUS /////
///////////////////////////////
const updateSkrillTransactionStatus = errorHandler(async (ctx: Context<any>) => {
  const request = (ctx.req as UpdateSkrillTransactionStatusRequest).toObject();
  const { transactionId, status } = request;

  // Update result transaction
  let success: boolean = false;
  await getManager().transaction("SERIALIZABLE", async manager => {
    const transactionRepository = await manager.getCustomRepository(TransactionRepository);
    const updateResult = await transactionRepository.updateSkrillStatus(
      transactionId,
      Object.keys(SkrillStatusModel)[status]
    );
    // Check if update failed
    const { raw } = updateResult;
    if (!raw || raw.affectedRows <= 0) {
      throw new InternalError(
        NOTI_PAYMENT.ERROR_UPDATE_TRANSACTION_SKRILL,
        ERROR_NAME_PAYMENT.ERROR_UPDATE_TRANSACTION_SKRILL
      );
    }

    // Skrill payment success. Add money to user
    // Call to User Service to add money
    if (status === SkrillStatusModel.STATUS_PROCESSED) {
      const moneyResult = await transactionRepository.getGoldCoinAndSweepCoinById(transactionId);
      if (!moneyResult) {
        throw new InternalError(
          NOTI_PAYMENT.ERROR_UPDATE_TRANSACTION_SKRILL,
          ERROR_NAME_PAYMENT.ERROR_UPDATE_TRANSACTION_SKRILL
        );
      }

      const userId = moneyResult.userId;
      const goldCoin: number = moneyResult.transactionGoldCoins;
      const sweepCoin: number = moneyResult.transactionSweepCoins;
      await UserPublisher.addCoinsToPlayer(userId, goldCoin, sweepCoin);
    }

    // If this line executed means success
    success = true;
  });

  // Response
  const response = new UpdateSkrillTransactionStatusResponse();
  response.setSuccess(success);
  ctx.res = response;
});

export default {
  rechargeWithStripe,
  rechargeWithSkrill,
  getAllTransaction,
  updateSkrillTransactionStatus
}
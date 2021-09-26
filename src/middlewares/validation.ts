import Joi from 'joi';
import { Context } from 'mali';
import { BadRequestError, errorHandler } from '@galaxy-fortune/common';
import {
  RechargeWithSkrillRequest,
  RechargeWithStripeRequest,
  SkrillStatusModel,
  UpdateSkrillTransactionStatusRequest
} from '../schemas/payment_pb';
import { ERROR_NAME_PAYMENT, NOTI_PAYMENT } from '../constants/noti';

const ValidateError = (
  message: string,
  errorName: string
) => new BadRequestError(message, errorName);

const rechargeWithStripe = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as RechargeWithStripeRequest).toObject();
  const body = {
    amountInUsd: requestBody.amountInUsd,
    description: requestBody.description,
    stripeToken: requestBody.stripeToken
  };

  const stripeSchema = Joi.object({
    amountInUsd: Joi.number()
      .positive()
      .required()
      .error(ValidateError(
        NOTI_PAYMENT.INVALID_AMOUNT,
        ERROR_NAME_PAYMENT.INVALID_AMOUNT
      )),
    description: Joi.string(),
    stripeToken: Joi.string()
      .required()
      .error(ValidateError(
        NOTI_PAYMENT.INVALID_STRIPE_TOKEN,
        ERROR_NAME_PAYMENT.INVALID_STRIPE_TOKEN
      ))
  });
  await stripeSchema.validateAsync(body);
  await next();
});

const rechargeWithSkrill = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as RechargeWithSkrillRequest).toObject();
  const body = {
    amountInUsd: requestBody.amountInUsd,
  };

  const skrillSchema = Joi.object({
    amountInUsd: Joi.number()
      .positive()
      .required()
      .error(ValidateError(
        NOTI_PAYMENT.INVALID_AMOUNT,
        ERROR_NAME_PAYMENT.INVALID_AMOUNT
      ))
  });
  await skrillSchema.validateAsync(body);
  await next();
});

const updateSkrillTransactionStatus = errorHandler(async (ctx: Context<any>, next: Function) => {
  const requestBody = (ctx.req as UpdateSkrillTransactionStatusRequest).toObject();
  const body = {
    transactionId: requestBody.transactionId,
    status: requestBody.status,
  };

  const skrillSchema = Joi.object({
    transactionId: Joi.number()
      .positive()
      .required()
      .error(ValidateError(
        NOTI_PAYMENT.INVALID_TRANSACTION_ID,
        ERROR_NAME_PAYMENT.INVALID_TRANSACTION_ID
      )),
    status: Joi.string()
      .valid(...Object.values(SkrillStatusModel))
      .required()
      .error(ValidateError(
        NOTI_PAYMENT.INVALID_SKRILL_STATUS,
        ERROR_NAME_PAYMENT.INVALID_SKRILL_STATUS
      )),
  });
  await skrillSchema.validateAsync(body);
  await next();
});

export default {
  rechargeWithStripe,
  rechargeWithSkrill,
  updateSkrillTransactionStatus
};
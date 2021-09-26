import {
  EntityRepository,
  InsertResult,
  Repository,
  UpdateResult
} from "typeorm";
import { TransactionEntity } from '../entity/Transaction';
import { PaymentType } from "../schemas/payment_pb";

@EntityRepository(TransactionEntity)
export class TransactionRepository extends Repository<TransactionEntity> {
  insertTransaction(
    userId: number,
    amountInUsd: number,
    transactionSweepCoins: number,
    transactionGoldCoins: number,
    paymentType: PaymentType,
    paymentId: string,
    status: string
  ): Promise<InsertResult> {
    return this.createQueryBuilder()
      .insert()
      .into(TransactionEntity)
      .values({
        userId,
        amountInUsd,
        transactionSweepCoins,
        transactionGoldCoins,
        paymentType: Object.keys(PaymentType)[paymentType],
        paymentId,
        status
      })
      .execute();
  }

  getAllTransactionsBetweenDates(from: string, to: string): Promise<TransactionEntity[]> {
    return this.createQueryBuilder("transaction")
      .where('transaction.createdDate BETWEEN :from AND :to')
      .setParameter("from", from)
      .setParameter("to", to)
      .getMany();
  }

  updateSkrillSession(id: number, sessionId: string): Promise<UpdateResult> {
    return this.createQueryBuilder()
      .update(TransactionEntity)
      .set({ paymentId: sessionId })
      .where("id = :id", { id })
      .limit(1)
      .execute();
  }

  updateSkrillStatus(transactionId: number, status: string): Promise<UpdateResult> {
    return this.createQueryBuilder()
      .update(TransactionEntity)
      .set({ status: status })
      .where("id = :id", { id: transactionId })
      .limit(1)
      .execute();
  }

  getGoldCoinAndSweepCoinById(id: number) {
    return this.createQueryBuilder("transaction")
      .select([
        "transaction.userId",
        "transaction.transactionGoldCoins",
        "transaction.transactionSweepCoins"
      ])
      .where('id = :id', { id })
      .getOne();
  }
}
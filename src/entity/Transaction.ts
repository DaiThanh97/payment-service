import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm';
import { ENTITY_TRANSACTION } from '../constants/common';
import { PaymentType } from '../schemas/payment_pb';

@Entity({ name: ENTITY_TRANSACTION })
export class TransactionEntity {
  @PrimaryGeneratedColumn()
  @Index('IDX_ID')
  id!: number;

  @Column({ type: 'bigint' })
  userId!: number;

  @Column({ type: 'double' })
  amountInUsd!: number;

  @Column({ type: 'double' })
  transactionSweepCoins!: number;

  @Column({ type: 'double' })
  transactionGoldCoins!: number;

  @Column({
    type: 'enum',
    enum: Object.keys(PaymentType),
    default: Object.keys(PaymentType)[PaymentType.PAYMENT_TYPE_STRIPE]
  })
  paymentType!: string;

  @Column({ type: 'varchar' })
  paymentId!: string;

  @Column({ type: 'varchar' })
  status!: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdDate!: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedDate!: Date;

  @DeleteDateColumn({ type: 'timestamp' })
  deletedDate!: Date;
}
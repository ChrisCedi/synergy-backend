import {
  Entity,
  Column,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';
import { Balance } from 'src/balances/entities/balance.entity';

@Entity()
export class Acquisition {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column('int')
  cost: number;

  @Column({ type: 'varchar' })
  paymentMethod: string;

  @Column('int', { default: 0 })
  initialPayment: number;

  @Column({ type: 'varchar' })
  remainingAmount: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  balanceId: number;

  @ManyToOne(() => Balance, (balance) => balance.acquisitions, {
    onDelete: 'CASCADE',
  })
  balance: Balance;
}

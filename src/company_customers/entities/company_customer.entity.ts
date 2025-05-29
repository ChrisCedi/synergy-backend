import { Balance } from 'src/balances/entities/balance.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class CompanyCustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60, unique: true })
  companyName: string;

  @Column({ type: 'varchar', length: 13, unique: true })
  rfc: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => User, (user) => user.companyCustomer, { cascade: true })
  users: User[];

  @OneToMany(() => Balance, (balance) => balance.companyCustomer, {
    cascade: true,
  })
  balances: Balance[];
}

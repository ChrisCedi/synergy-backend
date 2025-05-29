import { CompanyCustomer } from 'src/company_customers/entities/company_customer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Balance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  companyName: string;

  @Column({ type: 'integer' })
  capital: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => CompanyCustomer)
  companyCustomer: CompanyCustomer;
}

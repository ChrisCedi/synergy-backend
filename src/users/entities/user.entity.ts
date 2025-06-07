import { CompanyCustomer } from 'src/company_customers/entities/company_customer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100 })
  lastName: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 100 })
  password: string;

  @Column({ type: 'varchar', length: 50 })
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column()
  companyCustomerId: number;

  @ManyToOne(() => CompanyCustomer, (companyCustomer) => companyCustomer.users)
  companyCustomer: CompanyCustomer;
}

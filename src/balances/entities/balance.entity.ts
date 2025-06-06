import { CompanyCustomer } from 'src/company_customers/entities/company_customer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  OneToMany,
} from 'typeorm';
import { Acquisition } from 'src/acquisitions/entities/acquisition.entity';

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

  @OneToMany(() => Acquisition, (acquisition) => acquisition.balance, {
    cascade: true,
  })
  acquisitions: Acquisition[];
}

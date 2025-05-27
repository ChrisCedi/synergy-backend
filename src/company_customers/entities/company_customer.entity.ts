import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyCustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  companyName: string;

  @Column({ type: 'varchar', length: 13, unique: true })
  rfc: string;
}

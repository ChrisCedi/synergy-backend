import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CompanyCustomer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 60 })
  companyName: string;

  @Column({ type: 'varchar', length: 13, unique: true })
  rfc: string;

  @Column({ type: 'timestamp' })
  createdAt: Date;

  @OneToMany(() => User, (user) => user.companyCustomer, { cascade: true })
  users: User[];
}

import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Recharge {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ default: 'PENDING' })
  status: string;

  @Column()
  user_id: string;

  @Column()
  phone_number: string;

  @Column()
  amount: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;
}

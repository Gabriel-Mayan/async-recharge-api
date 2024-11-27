import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Recharge {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}

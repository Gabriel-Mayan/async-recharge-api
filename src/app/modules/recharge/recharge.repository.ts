import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Recharge } from './recharge.entity';
import { ICreateRecharge, IUpdateRecharge } from './recharge.interface';

@Injectable()
export class RechargeRepository {
  constructor(
    @InjectRepository(Recharge)
    private repository: Repository<Recharge>,
  ) {}

  async createRecharge({ user_id, phone_number, amount }: ICreateRecharge) {
    const recharge = this.repository.create({ user_id, phone_number, amount });

    return this.repository.save(recharge);
  }

  async updateRecharge({ recharge_id, status }: IUpdateRecharge) {
    return this.repository.update({ id: recharge_id }, { status });
  }
}

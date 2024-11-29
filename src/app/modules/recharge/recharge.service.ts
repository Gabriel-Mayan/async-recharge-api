import { Queue } from 'bullmq';
import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';

import { IStartRecharge, IUpdateRechargeStatus } from './recharge.interface';
import { RechargeRepository } from './recharge.repository';

@Injectable()
export class RechargeService {
  constructor(
    private readonly rechargeRepository: RechargeRepository,
    @InjectQueue('recharge') private readonly rechrgeQueue: Queue,
  ) {}

  async startRecharge({ user_id, phone_number, amount }: IStartRecharge) {
    const newRecharge = await this.rechargeRepository.createRecharge({
      user_id,
      phone_number,
      amount,
    });

    const rechargeData = {
      recharge_id: newRecharge.id,
      user_id,
      phone_number,
      amount,
    };

    await this.rechrgeQueue.add('process-recharge', rechargeData, {
      delay: 1000,
      attempts: 3,
    });

    return rechargeData;
  }

  async updateRechargeStatus({ recharge_id, status }: IUpdateRechargeStatus) {
    return this.rechargeRepository.updateRecharge({
      recharge_id,
      status,
    });
  }
}

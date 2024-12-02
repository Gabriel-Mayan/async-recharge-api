import { Queue } from 'bullmq';
import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';

import { IUpdateRechargeStatus } from './recharge.interface';
import { RechargeRepository } from './recharge.repository';
import { CreateRechargeDto } from './dto/create-recharge.dto';
import { GetRechargeStatusDto } from './dto/get-recharge-status.dto';

@Injectable()
export class RechargeService {
  constructor(
    private readonly rechargeRepository: RechargeRepository,
    @InjectQueue('recharge') private readonly rechargeQueue: Queue,
  ) {}

  async startRecharge({ user_id, phone_number, amount }: CreateRechargeDto) {
    const { id, status } = await this.rechargeRepository.createRecharge({
      user_id,
      phone_number,
      amount,
    });

    await this.rechargeQueue.add('process-recharge', {
      recharge_id: id,
    });

    return {
      recharge_id: id,
      status,
    };
  }

  async updateRechargeStatus({ recharge_id, status }: IUpdateRechargeStatus) {
    return this.rechargeRepository.updateRecharge({
      recharge_id,
      status,
    });
  }

  async findRecharge({ user_id, phone_number }: GetRechargeStatusDto) {
    const result = await this.rechargeRepository.findRechargeByUserAndPhone({
      user_id,
      phone_number,
    });

    if (!result) {
      throw new BadRequestException('Recarga não encontrada...');
    }

    const { id: recharge_id, ...recharge } = result;

    return { recharge_id, ...recharge };
  }

  proccessRecharge() {
    const proccessFail = parseInt(process.env.FAIL_PROCCESS_CHANCE, 10);

    const proccessFailChance =
      proccessFail > 100 ? 100 : proccessFail < 0 ? 0 : proccessFail;

    const sucesso = Math.random() > proccessFailChance / 100;

    return sucesso ? 'SUCCESS' : 'FAILED';
  }
}

import { Injectable } from '@nestjs/common';

import { RechargeRepository } from './recharge.repository';

@Injectable()
export class RechargeService {
  constructor(private readonly rechargeRepository: RechargeRepository) {}
}

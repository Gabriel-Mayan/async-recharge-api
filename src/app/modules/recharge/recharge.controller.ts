import { Controller } from '@nestjs/common';

import { RechargeService } from './recharge.service';

@Controller('recharge')
export class RechargeController {
  constructor(private readonly rechargeService: RechargeService) {}
}

import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Recharge } from './recharge.entity';
import { RechargeService } from './recharge.service';
import { RechargeProcessor } from './recharge.processor';
import { RechargeRepository } from './recharge.repository';
import { RechargeController } from './recharge.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recharge, RechargeRepository]),
    BullModule.registerQueueAsync({ name: 'recharge' }),
  ],
  controllers: [RechargeController],
  providers: [RechargeRepository, RechargeProcessor, RechargeService],
})
export class RechargeModule {}

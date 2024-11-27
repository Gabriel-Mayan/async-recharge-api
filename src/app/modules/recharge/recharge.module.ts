import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Recharge } from './recharge.entity';
import { RechargeService } from './recharge.service';
import { RechargeRepository } from './recharge.repository';
import { RechargeController } from './recharge.controller';

@Module({
  controllers: [RechargeController],
  imports: [TypeOrmModule.forFeature([Recharge, RechargeRepository])],
  providers: [RechargeRepository, RechargeService],
})
export class UsersModule {}

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bullmq';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { RechargeModule } from '../recharge/recharge.module';

import { bullConfig } from '../../../app/config/bull.config';
import { databaseConfig } from '../../../app/config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(databaseConfig),
    BullModule.forRoot(bullConfig),
    RechargeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

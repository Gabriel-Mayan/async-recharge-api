import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BullModule } from '@nestjs/bull';

import { AppService } from './app.service';
import { AppController } from './app.controller';
import { databaseConfig } from '../../../app/config/database.config';
import { bullConfig } from 'src/app/config/bull.config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    TypeOrmModule.forRoot(databaseConfig),
    BullModule.forRoot(bullConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { BullRootModuleOptions } from '@nestjs/bullmq';

export const bullConfig: BullRootModuleOptions = {
  connection: {
    host: process.env.REDIS_HOST || 'localhost',
    port: parseInt(process.env.REDIS_PORT, 10) || 6379,
  },
};

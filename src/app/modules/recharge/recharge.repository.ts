import { Repository } from 'typeorm';

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Recharge } from './recharge.entity';

@Injectable()
export class RechargeRepository {
  constructor(
    @InjectRepository(Recharge)
    private repository: Repository<Recharge>,
  ) {}
}

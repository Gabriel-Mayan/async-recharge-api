import {
  Controller,
  Post,
  Get,
  Body,
  Query,
  BadRequestException,
} from '@nestjs/common';

import { RechargeService } from './recharge.service';
import { CreateRechargeDto } from './dto/create-recharge.dto';
import { GetRechargeStatusDto } from './dto/get-recharge-status.dto';

@Controller('api/recharge')
export class RechargeController {
  constructor(private readonly rechargeService: RechargeService) {}

  @Post()
  async createRecharge(@Body() createRechargeDto: CreateRechargeDto) {
    try {
      const result =
        await this.rechargeService.startRecharge(createRechargeDto);

      return { message: 'Recarga iniciada com sucesso.', ...result };
    } catch (error) {
      throw new BadRequestException('Erro ao processar recarga.');
    }
  }

  @Get('/status')
  async getRechargeStatus(@Query() getRechargeStatusDto: GetRechargeStatusDto) {
    const recharge = await this.rechargeService.findRecharge({
      user_id: getRechargeStatusDto.user_id,
      phone_number: getRechargeStatusDto.phone_number,
    });

    return recharge;
  }
}

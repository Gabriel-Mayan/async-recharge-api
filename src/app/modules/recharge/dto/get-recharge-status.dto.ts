import { IsNotEmpty, IsString, IsUUID, Matches } from 'class-validator';

export class GetRechargeStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID(4)
  user_id: string;

  @IsNotEmpty()
  @Matches(/^\+\d{11,12}$/, { message: 'Número de telefone inválido...' })
  phone_number: string;
}

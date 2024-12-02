import { IsNotEmpty, IsString, IsUUID, Max, Min } from 'class-validator';

export class GetRechargeStatusDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID(4)
  user_id: string;

  @IsNotEmpty()
  @Min(10, { message: 'Numero de telefone muito curto...' })
  @Max(10, { message: 'Numero de telefone muito longo...' })
  phone_number: string;
}

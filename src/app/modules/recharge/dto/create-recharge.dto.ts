import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  Max,
  IsUUID,
} from 'class-validator';

export class CreateRechargeDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID(4)
  user_id: string;

  @IsNotEmpty()
  @Min(10, { message: 'Numero de telefone muito curto...' })
  @Max(10, { message: 'Numero de telefone muito longo...' })
  phone_number: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.01, { message: 'Recarga deve ser de no mínimo, um centavo' })
  amount: number;
}

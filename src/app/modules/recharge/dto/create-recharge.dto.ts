import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Min,
  IsUUID,
  Matches,
} from 'class-validator';

export class CreateRechargeDto {
  @IsNotEmpty()
  @IsString()
  @IsUUID(4)
  user_id: string;

  @IsNotEmpty()
  @Matches(/^\+\d{11,12}$/, { message: 'Número de telefone inválido.' })
  phone_number: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(0.01, { message: 'Recarga deve ser de no mínimo um centavo' })
  amount: number;
}

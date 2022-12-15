import { InputType } from '@nestjs/graphql';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

@InputType()
export class UpdateProjectInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  title?: string;

  @IsString()
  @Matches(/^[0-9]{8}$/)
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  zip_code?: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  cost?: number;

  @IsDate()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  deadline?: Date;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  username?: string;
}

import { InputType } from '@nestjs/graphql';
import {
  IsDate,
  IsNotEmpty,
  IsNumber,
  IsString,
  Matches,
} from 'class-validator';

@InputType()
export class CreateProjectWithHeaderInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  title: string;

  @IsString()
  @Matches(/^[0-9]{8}$/)
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  zip_code: string;

  @IsNumber()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  cost: number;

  @IsDate()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  deadline: Date;
}

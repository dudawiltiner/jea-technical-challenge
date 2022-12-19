import { InputType } from '@nestjs/graphql';
import {
  IsBoolean,
  IsDate,
  IsInt,
  IsNotEmpty,
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

  @IsInt()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  cost?: number;

  @IsBoolean()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  done?: boolean;

  @IsDate()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  deadline?: Date;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsOptional()
  username?: string;
}

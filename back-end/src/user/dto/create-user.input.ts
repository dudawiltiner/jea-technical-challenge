import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateUserInput {
  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  name: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  password: string;

  @IsString()
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  username: string;
}

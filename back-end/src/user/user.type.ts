import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class LoginUser {
  @Field(() => String)
  name: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  token: string;
}

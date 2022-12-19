import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class FoundProject {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  title: string;

  @Field(() => String)
  zip_code: string;

  @Field(() => String)
  city: string;

  @Field(() => Int)
  cost: number;

  @Field(() => Boolean)
  done: boolean;

  @Field(() => Date)
  deadline: Date;

  @Field(() => String)
  username: string;

  @Field(() => Date)
  create_at: Date;

  @Field(() => Date)
  update_at: Date;
}

import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  async user(@Args('id') id: string): Promise<User> {
    const oneUser = await this.userService.findUserById(id);
    return oneUser;
  }

  @Query(() => [User])
  async users(@Context() context): Promise<User[]> {
    console.log(context.req.headers);
    const users = await this.userService.findAllUsers();
    return users;
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: CreateUserInput): Promise<User> {
    const user = await this.userService.createUser(data);
    return user;
  }

  @Mutation(() => User)
  async loginUser(
    @Args('username') username: string,
    @Args('password') password: string,
  ): Promise<User> {
    const user = await this.userService.loginUser(username, password);

    if (!user) {
      return user;
    }

    return this.userService.createToken(user);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('id') id: string,
    @Args('data') data: UpdateUserInput,
  ): Promise<User> {
    const user = await this.userService.updateUser(id, data);
    return user;
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string): Promise<boolean> {
    const deleted = await this.userService.deleteUser(id);
    return deleted;
  }
}

import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as jwt from 'jsonwebtoken';
import { User } from './user.entity';

const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  createToken({ id, username }: User) {
    return jwt.sign(
      { data: { id, username } },
      process.env.SECRET_KEY,
      jwtConfig,
    );
  }

  async findAllUsers(): Promise<User[]> {
    const users = await this.userRepository.find();
    return users;
  }

  async findUserById(id: string): Promise<User> {
    const user = this.userRepository.findOneBy({ id: id });

    if (!user) {
      throw new NotFoundException('Usuário não econtrado');
    }

    return user;
  }

  async loginUser(username: string, password: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ username, password });
    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }
    return user;
  }

  async createUser(data: CreateUserInput): Promise<User> {
    const existedProject = await this.userRepository.findOneBy({
      username: data.username,
    });

    if (existedProject) {
      throw new InternalServerErrorException('Usuário já existe');
    }
    const user = this.userRepository.create(data);
    const userSaved = await this.userRepository.save(user);

    if (!userSaved) {
      throw new InternalServerErrorException('Problema para criar um usuário');
    }

    return userSaved;
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<User> {
    const user = await this.findUserById(id);

    await this.userRepository.update(user, { ...data });
    // gerar um valor que pode ser retornado
    const userUpdate = this.userRepository.create({ ...user, ...data });

    return userUpdate;
  }

  async deleteUser(id: string): Promise<boolean> {
    const deleted = await this.userRepository.delete({ id });

    if (deleted) {
      return true;
    }

    return false;
  }
}

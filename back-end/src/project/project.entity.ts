import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: string;

  @Column()
  title: string;

  @Column()
  zip_code: string;

  @Column()
  cost: number;

  @Column('boolean', { default: false })
  done: boolean;

  @Column()
  deadline: Date;

  @Column()
  username: string;

  // source: https://stackoverflow.com/questions/64941148/node-js-add-created-at-and-updated-at-in-entity-of-typeorm
  @CreateDateColumn()
  create_at: Date;

  @UpdateDateColumn()
  update_at: Date;
}

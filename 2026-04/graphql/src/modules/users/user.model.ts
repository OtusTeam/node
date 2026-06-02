import { Field, InputType, Int, ObjectType, registerEnumType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Team, TeamQuery } from '../teams/team.model';

export enum EGenderType {
  Male = 1,
  Female = 2,
}

registerEnumType(EGenderType, {
  name: 'EGenderType',
});

export enum ERole {
  Admin = 'Admin',
  User = 'User',
}

registerEnumType(ERole, {
  name: 'ERole',
});

@Entity('users')
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field({ nullable: true })
  firstName: string;

  @Column()
  @Field({ nullable: false })
  lastName: string;

  @Column()
  password: string;

  @ManyToMany(() => Team, (team) => team.members)
  @Field(() => [TeamQuery], { nullable: true })
  teams: TeamQuery[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Field(() => EGenderType, { nullable: true })
  gender: EGenderType;

  @Field(() => ERole, { nullable: true })
  role: ERole;
}

@InputType()
export class UserInput {
  @Field({ nullable: false })
  firstName: string;

  @Field({ nullable: false })
  lastName: string;

  @Field({ nullable: false })
  password: string;

  @Field(() => Int, { nullable: true })
  teamId?: number;
}

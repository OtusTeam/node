import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './modules/teams/team.model';
import { TeamModule } from './modules/teams/team.module';
import { User } from './modules/users/user.model';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    // Работа с БД
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 25432,
      username: 'test-user',
      password: 'test-password',
      database: 'demo',
      entities: [ Team, User ],
      synchronize: true,
    }),
    // Работа с GRAPHQL
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      // точка входа, но у меня она дефолтная
      // включить
      installSubscriptionHandlers: true,
    }),

    UserModule,
    TeamModule,
  ],
})
export class AppModule {
}

import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { TasksModule } from './tasks/tasks.module';
import { AppController } from './app.controller';

@Module({
  imports: [ConfigModule, DatabaseModule, TasksModule],
  controllers: [AppController],
})
export class AppModule {}

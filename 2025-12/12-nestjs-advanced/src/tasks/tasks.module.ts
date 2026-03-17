import { Module } from '@nestjs/common';
import { TasksRepository } from './repositories/tasks.repository';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';

/**
 * Слой задач: Controller → Service → Repository.
 * Репозиторий инжектится в сервис через конструктор (Nest подставляет его из providers).
 */
@Module({
  controllers: [TasksController],
  providers: [TasksRepository, TasksService],
  exports: [TasksService],
})
export class TasksModule { }

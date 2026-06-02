import { Injectable } from '@nestjs/common';
import type { Task } from './entities/task.entity';
import { TasksRepository } from './repositories/tasks.repository';
import { CreateTaskInput, UpdateTaskInput } from './tasks.schemas';

@Injectable()
export class TasksService {
  constructor(private readonly tasksRepository: TasksRepository) { }

  async create(input: CreateTaskInput): Promise<Task> {
    return this.tasksRepository.create({
      title: input.title,
      description: input.description,
      completed: input.completed ?? false,
      createdAt: new Date(),
    });
  }

  async findAll(): Promise<Task[]> {
    return this.tasksRepository.findAll();
  }

  async findById(id: string): Promise<Task | null> {
    return this.tasksRepository.findById(id);
  }

  async update(id: string, input: UpdateTaskInput): Promise<Task | null> {
    return this.tasksRepository.update(id, {
      ...input,
      updatedAt: new Date(),
    });
  }

  async remove(id: string): Promise<boolean> {
    return this.tasksRepository.delete(id);
  }
}

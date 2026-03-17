import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards
} from '@nestjs/common';
import { Public } from '../common/decorators/public.decorator';
import { Roles } from '../common/decorators/roles.decorator';
import { JwtUser, User } from '../common/decorators/user.decorator';
import { AuthGuard } from '../common/guards/auth.guard';
import { RolesGuard } from '../common/guards/roles.guard';
import { ZodValidationPipe } from '../common/pipes/zod-validation.pipe';
import {
  createTaskSchema,
  taskIdParamSchema,
  updateTaskSchema,
  type CreateTaskInput,
  type UpdateTaskInput
} from './tasks.schemas';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  @Post()
  @UseGuards(AuthGuard)
  create(@Body(new ZodValidationPipe(createTaskSchema)) body: CreateTaskInput, @User() user: JwtUser) {
    return this.tasksService.create(body);
  }

  @Get()
  @Public()
  findAll() {
    return this.tasksService.findAll();
  }

  @Get(':id')
  @Public()
  findOne(
    @Param(new ZodValidationPipe(taskIdParamSchema)) params: { id: string },
  ) {
    return this.tasksService.findById(params.id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(
    @Param(new ZodValidationPipe(taskIdParamSchema)) params: { id: string },
    @Body(new ZodValidationPipe(updateTaskSchema)) body: UpdateTaskInput,
  ) {
    return this.tasksService.update(params.id, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('admin')
  remove(
    @Param(new ZodValidationPipe(taskIdParamSchema)) params: { id: string },
  ) {
    return this.tasksService.remove(params.id);
  }
}


import { Router } from 'express';
import { tasksController } from '../controllers/tasks.js';
import { requireAuth } from '../middleware/auth.js';
import { validate } from '../middleware/validate.js';
import {
  createTaskSchema,
  idParamSchema,
  tasksQuerySchema,
  updateTaskSchema,
} from '../schemas/tasks.js';

const router = Router();

// GET / - все таски (без авторизации)
router.get('/', validate(tasksQuerySchema, 'query'), tasksController.getAll.bind(tasksController));

// GET /:id - получаем таску по id
router.get(
  '/:id',
  validate(idParamSchema, 'params'),
  tasksController.getById.bind(tasksController)
);

// /:id - получаем таску по id
router.head(
  '/:id',
  validate(idParamSchema, 'params'),
  tasksController.headById.bind(tasksController)
);

// POST / - создаем таску (требуется авторизация)
router.post(
  '/',
  requireAuth,
  validate(createTaskSchema, 'body'),
  tasksController.create.bind(tasksController)
);

// PATCH /:id - обновляем таску (требуется авторизация)
router.patch(
  '/:id',
  requireAuth,
  validate(idParamSchema, 'params', 'validatedParams'),
  validate(updateTaskSchema, 'body', 'validatedBody'),
  tasksController.update.bind(tasksController)
);

// DELETE /:id - удаляем таску (требуется авторизация)
router.delete(
  '/:id',
  requireAuth,
  validate(idParamSchema, 'params'),
  tasksController.delete.bind(tasksController)
);

export default router;

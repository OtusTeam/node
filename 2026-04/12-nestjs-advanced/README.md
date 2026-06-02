# NestJS Advanced — Pipes, Guards, Interceptors, Decorators

Пример проекта с ключевыми сущностями экосистемы Nest.js.

## Что внутри

- **ConfigModule** — конфигурация (порт, URL MongoDB).
- **DatabaseModule** — подключение к MongoDB при старте, отключение при остановке.
- **Pipes (Zod)** — `ZodValidationPipe` для валидации body/params через схемы Zod.
- **Guards** — `AuthGuard` (Bearer-токен, опционально `@Public()`), `RolesGuard` (проверка ролей через `@Roles()`).
- **Interceptors** — `LoggingInterceptor`, `TransformInterceptor` (формат ответа), `TimeoutInterceptor`.
- **Декораторы** — `@Public()`, `@Roles()`, `@User()`, `@ApiVersion()`.

## Запуск

```bash
npm install
# MongoDB локально или MONGO_URI=mongodb://...
npm run start:dev
```

Порт по умолчанию: `3000`. Переменные: `PORT`, `MONGO_URI`.

## Примеры запросов

- `GET /health` — без авторизации.
- `GET /tasks` — список задач (публично).
- `POST /tasks` — создать задачу (нужен заголовок `Authorization: Bearer <token>`).
- `PATCH /tasks/:id` — обновить (с авторизацией).
- `DELETE /tasks/:id` — только для роли `admin` (токен вида `Bearer admin-xxx`).

Валидация body/params через Zod; при ошибке — `400` с полем `errors`.

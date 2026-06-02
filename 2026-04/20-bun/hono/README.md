# Hono + Bun — учебный пример (структура проекта, роутинг, middleware, валидация)

Демонстрационный сервис на `Hono` под `Bun` с:
- **структурой папок** (как в реальном проекте),
- **групповым роутингом**,
- **middleware** (логирование, pretty JSON, замер времени ответа, опциональный API-key),
- **валидацией** запросов через `zod`/`@hono/zod-validator`,
- единой обработкой ошибок и `notFound`.

## Структура

```
src/
  index.ts          # точка входа (Bun.serve)
  app.ts            # сборка приложения Hono, глобальные middleware, notFound/onError
  middlewares/
    responseTime.ts # добавляет x-response-time-ms
    apiKey.ts       # простой API-key middleware (демо)
  lib/
    tasks.ts        # тип Task и in-memory репозиторий
  routes/
    health.ts       # /, /health
    tasks.ts        # /api/tasks CRUD + валидация
```

## Установка

```bash
bun install
```

## Запуск

```bash
bun run dev
# или
PORT=3101 bun run start
```

## Эндпоинты (основные)

- `GET /` — описание сервиса (JSON)
- `GET /health` — проверка живости (`ok`)
- `GET /api/tasks` — список (`?completed=true|false&search=...`)
- `POST /api/tasks` — создать `{ "title": "..." }`
- `GET /api/tasks/:id` — получить по id
- `PATCH /api/tasks/:id` — обновить `{ "title"?, "completed"? }`
- `DELETE /api/tasks/:id` — удалить (204)

## Примеры (curl)

Создать:
```bash
curl -sS -X POST http://localhost:3101/api/tasks \
  -H 'content-type: application/json' \
  -d '{"title":"buy milk"}' | jq
```

Список:
```bash
curl -sS "http://localhost:3101/api/tasks?completed=false" | jq
```

Обновить:
```bash
curl -sS -X PATCH "http://localhost:3101/api/tasks/<id>" \
  -H 'content-type: application/json' \
  -d '{"completed":true}' | jq
```

Удалить:
```bash
curl -i -X DELETE "http://localhost:3101/api/tasks/<id>"
```

## Опциональная авторизация по API key

Middleware `apiKey` можно навесить на под-группу роутов. Пример:

```ts
import { Hono } from "hono";
import { apiKey } from "./middlewares/apiKey";

const secure = new Hono().use(apiKey()).get("/", (c) => c.json({ ok: true }));
app.route("/api/secure", secure);
```

Ключ передаётся в заголовке `x-api-key: <KEY>` или как `?api_key=<KEY>`. Значение берётся из `process.env.API_KEY` (или `"dev-key"` по умолчанию).

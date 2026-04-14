# elysia

Минимальный пример `elysia` на Bun.

## Установка

```bash
bun install
```

## Запуск

```bash
bun run dev
# или
PORT=3102 bun run start
```

## Эндпоинты

- `GET /` — описание сервиса (JSON)
- `GET /health` — `ok`
- `GET /swagger` — Swagger UI
- `GET /api/tasks` — список (`?completed=true|false&search=...`)
- `POST /api/tasks` — создать `{ "title": "..." }`
- `GET /api/tasks/:id` — получить по id
- `PATCH /api/tasks/:id` — обновить `{ "title"?, "completed"? }`
- `DELETE /api/tasks/:id` — удалить (204)
- `WS /ws` — websocket echo

## WebSocket пример

```bash
# если установлен websocat
websocat ws://localhost:3102/ws
```

# bun

Минимальный HTTP-сервер на чистом Bun (`Bun.serve`).

## Установка

```bash
bun install
```

## Запуск

```bash
bun run dev
# или
PORT=3100 bun run start
```

## Эндпоинты

- `GET /` — текстовый ответ
- `GET /health` — `ok`

## Нагрузочный тест (autocannon)

В отдельном терминале запусти сервер:

```bash
PORT=3111 bun run start
```

И затем нагрузку:

```bash
bunx autocannon -c 50 -d 10 -p 1 http://localhost:3111/health
```

Параметры:
- `-c` — connections
- `-d` — duration (сек)
- `-p` — pipelining

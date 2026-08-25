# 07 — Blocking server

Express-сервер с «быстрым» и «медленным» эндпоинтом.
`/slow` крутит CPU в основном потоке и блокирует event loop для остальных запросов.

## Запуск

```bash
npm run case:07
# или
node cases/07-server
```

Проверка:

```bash
curl http://localhost:4002/fast
curl http://localhost:4002/slow
curl http://localhost:4002/crypto
```

Нагрузка:

```bash
npm run stress -- --path /fast
npm run stress -- --path /slow
```

## Эндпоинты

| Path | Что делает |
|------|------------|
| `/fast` | отдает маленький JSON |
| `/slow` | синхронно обходит большой массив |
| `/crypto` | CPU через `crypto.pbkdf2` (libuv threadpool) |

## На что смотреть

- Пока идёт `/slow`, latency у `/fast` растёт — loop занят.
- Сравнить с кейсом `08-server-worker`.

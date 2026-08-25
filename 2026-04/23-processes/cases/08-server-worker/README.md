# 08 — Server + worker_threads

Тяжёлую работу выносим в worker thread: main thread остаётся свободным для `/fast`.

## Запуск

```bash
npm run case:08
# или
node cases/08-server-worker
```

Проверка:

```bash
curl http://localhost:4002/fast
curl http://localhost:4002/slow-thread
```

Нагрузка (в другом терминале держать `/slow-thread`, параллельно бить `/fast`):

```bash
npm run stress -- --path /fast
```

## На что смотреть

- `/slow-thread` считает в отдельном потоке.
- `/fast` не должен деградировать так сильно, как в кейсе `07`.
- Минус: на каждый запрос создаётся новый `Worker` — в проде лучше пул (Piscina).

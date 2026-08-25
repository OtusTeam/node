# 05 — worker_threads

Поток внутри того же процесса: память можно шарить, IPC дешевле, чем у процессов.
Один файл работает и как main, и как worker через `isMainThread`.

## Запуск

```bash
npm run case:05
# или
node cases/05-worker-threads
```

## На что смотреть

- `isMainThread` разделяет логику родителя и воркера.
- Данные на старте: `workerData`.
- Дальше — `postMessage` / `parentPort`.

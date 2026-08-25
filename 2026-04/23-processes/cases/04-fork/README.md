# 04 — child_process.fork

`fork` — специальный случай для Node.js-скриптов: уже есть IPC-канал.
Родитель и ребёнок обмениваются сообщениями через `send` / `message`.

## Запуск

```bash
npm run case:04
# или
node cases/04-fork
```

## На что смотреть

- Отдельный процесс Node (изолированная память).
- IPC: `child.send(...)` ↔ `process.on('message', ...)`.
- После ответа ребёнок завершается через `process.exit(0)`.

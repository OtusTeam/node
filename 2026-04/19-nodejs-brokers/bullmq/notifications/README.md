# BullMQ Notifications Example (TypeScript)

Типичный кейс: очередь уведомлений (email/push) с ретраями при временных ошибках.

## Prerequisites

- Redis должен быть поднят (в проекте это `localhost:6380` через `docker-compose.yml`)

## Run

```bash
cd /home/nik/projects/webinar/node/2025-12/19-nodejs-brokers/bullmq/notifications
npm install
```

Запусти воркер:

```bash
npm run worker
```

В другом терминале отправь задания:

```bash
npm run producer
```

## Environment variables

- `REDIS_HOST` (default: `127.0.0.1`)
- `REDIS_PORT` (default: `6380`)
- `BULLMQ_QUEUE` (default: `notifications`)

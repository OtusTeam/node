# Node.js + RabbitMQ examples (TypeScript)

В папке 3 независимых кейса RabbitMQ на TypeScript, каждый в отдельной подпапке:
- `workers` - очередь задач и несколько воркеров
- `pubsub` - fanout pub/sub
- `rpc` - request/reply (RPC)

Также есть `docker-compose.yml`, который поднимает:
- RabbitMQ: `localhost:5673`, UI `localhost:15673`
- Kafka: `localhost:9094`
- Redis (для BullMQ): `localhost:6380`

## 1) Поднять инфраструктуру

```bash
cd /home/nik/projects/webinar/node/2025-12/19-nodejs-brokers/rabbitmq
docker compose up -d
```

## 2) Workers (отдельный проект)

```bash
cd /home/nik/projects/webinar/node/2025-12/19-nodejs-brokers/rabbitmq/workers
npm install
```

Запусти 2-3 воркера в разных терминалах:

```bash
npm run worker
```

Отправь задачи:

```bash
npm run producer
```

## 3) Pub/Sub (отдельный проект)

```bash
cd /home/nik/projects/webinar/node/2025-12/19-nodejs-brokers/rabbitmq/pubsub
npm install
```

Запусти 2 подписчика:

```bash
npm run subscriber
```

Публикация:

```bash
npm run publisher -- "hello from publisher"
```

## 4) RPC (отдельный проект)

```bash
cd /home/nik/projects/webinar/node/2025-12/19-nodejs-brokers/rabbitmq/rpc
npm install
```

Сначала сервер:

```bash
npm run server
```

Потом клиент:

```bash
npm run client -- 12
```

## Environment

Во всех кейсах можно переопределить RabbitMQ URL:

```bash
RABBITMQ_URL=amqp://guest:guest@localhost:5673
```

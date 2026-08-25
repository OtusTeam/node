# 10 — PM2

Process manager: cluster-режим, рестарты, логи, zero-downtime reload.
Для демо — обёртка над тем же сервером из кейса `07`.

## Запуск

```bash
npm run case:10
# или
npx pm2 start cases/10-pm2/ecosystem.config.js
```

Полезные команды:

```bash
npx pm2 status
npx pm2 logs
npx pm2 reload all
npx pm2 delete all
```

Нагрузка:

```bash
npm run stress -- --path /fast
```

## На что смотреть

- `instances: max` + `exec_mode: cluster` ≈ идея кейса `09`, но с ops-обвязкой.
- В проде PM2/systemd/k8s решают эксплуатацию; `cluster` модуль — механизм внутри Node.

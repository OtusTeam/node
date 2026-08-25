# 23 — Processes & threads

Сценарий занятия: от блокировки event loop → к процессам/потокам → к масштабированию HTTP.

## Быстрый старт

```bash
npm ci
npm run case:01
```

Серверные кейсы слушают `PORT` (по умолчанию `4002`).

```bash
npm run case:07
npm run stress -- --path /fast
```

## Кейсы

| # | Папка | Идея |
|---|--------|------|
| 01 | [cases/01-event-loop](cases/01-event-loop) | sync CPU блокирует event loop |
| 02 | [cases/02-exec](cases/02-exec) | `child_process.exec` + буфер |
| 03 | [cases/03-spawn](cases/03-spawn) | `spawn` и стриминг stdout |
| 04 | [cases/04-fork](cases/04-fork) | `fork` + IPC |
| 05 | [cases/05-worker-threads](cases/05-worker-threads) | потоки и `postMessage` |
| 06 | [cases/06-piscina](cases/06-piscina) | пул worker threads |
| 07 | [cases/07-server](cases/07-server) | `/fast` vs блокирующий `/slow` |
| 08 | [cases/08-server-worker](cases/08-server-worker) | offload в worker |
| 09 | [cases/09-cluster](cases/09-cluster) | `cluster` на все CPU |
| 10 | [cases/10-pm2](cases/10-pm2) | PM2 в cluster-режиме |
| 11 | [cases/11-profiling](cases/11-profiling) | Clinic + `--cpu-prof` + `0x` |

В каждой папке есть короткий `README.md`: зачем кейс, как запустить, на что смотреть.

## Карта занятия

1. Почему Node «однопоточный» и где ломается на CPU → `01`, `07`
2. Процессы: `exec` / `spawn` / `fork` → `02`–`04`
3. Потоки и пулы → `05`, `06`, `08`
4. Масштабирование HTTP на машине → `09`, `10`
5. Как увидеть блокировку в профайлере → `11`

## Команды

```bash
npm run case:01   # … case:11
npm start         # = case:07
npm run start:cluster
npm run start:pm2
npm run stress -- --path /slow

# профилирование (кейс 11)
npm run profile:clinic   # Clinic Doctor + autocannon /slow
npm run profile:flame    # Clinic Flame
npm run profile:cpu      # node --cpu-prof → .profiles/*.cpuprofile
npm run profile:0x       # 0x flamegraph
```

## Заметки

- Процесс — изолированная программа (своя память). Общение через IPC/stdio.
- Поток (`worker_threads`) — внутри процесса, дешевле для CPU-задач.
- `cluster` / PM2 масштабируют **весь** сервер; `worker_threads` / Piscina — точечный offload.
- Clinic на новых Node часто ломается на Ctrl+C — здесь запуск через `--on-port` (нагрузка сама завершает процесс).
- Артефакты профилирования (`.clinic/`, `.profiles/`) в git не коммитим.

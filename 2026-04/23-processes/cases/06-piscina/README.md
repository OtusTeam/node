# 06 — Piscina

Пул worker threads: не создаём поток на каждый запрос вручную.
Удобно для CPU-задач с очередью и переиспользованием воркеров.

## Запуск

```bash
npm run case:06
# или
node cases/06-piscina
```

## На что смотреть

- `filename` указывает на worker-модуль.
- `piscina.run(payload)` возвращает Promise с результатом.
- По умолчанию размер пула ≈ числу CPU.

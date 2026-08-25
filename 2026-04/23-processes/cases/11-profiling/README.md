# 11 — Profiling (Clinic / cpu-prof / 0x)

Сравнить инструменты профилирования на одном и том же CPU-сценарии.

> Clinic.js официально **слабо поддерживается** и часто ломается на Node ≥ 21
> (зависает на Ctrl+C, не пишет отчёт). Здесь запускаем через `--on-port`:
> нагрузка сама останавливает процесс — отчёт собирается без Ctrl+C.

## A. Clinic Doctor / Flame

```bash
npm run profile:clinic
npm run profile:flame
```

Что происходит:
1. поднимается сервер из кейса `07`;
2. Clinic выставляет `$PORT` и гоняет `autocannon` в `/slow` ~10 сек;
3. процесс завершается → HTML в `.clinic/`.

`NO_INSIGHT=1` отключает телеметрию Clinic (иначе может упасть на mkdir в `~/.config`).

Открыть отчёт — HTML из `.clinic/` в браузере.

Если зависло на Ctrl+C — не используй Ctrl+C: только `--on-port` (как в npm scripts). В крайнем случае добей PID в другом терминале.

## B. Встроенный `--cpu-prof`

```bash
npm run profile:cpu
```

Появится `*.cpuprofile` в `.profiles/`.
Открыть: Chrome DevTools → Performance / Profiler → Load profile.

## C. 0x (flamegraph)

```bash
npm run profile:0x
```

Интерактивный HTML-flamegraph (обычно `flamegraph.html` рядом с процессом / в cwd).

## На что смотреть

| Инструмент | Плюс | Минус |
|------------|------|--------|
| Clinic Doctor | быстрый «что не так» | на новых Node нестабилен |
| Clinic Flame | наглядный flamegraph | то же |
| `--cpu-prof` | встроено, стабильно | нужен Chrome |
| 0x | хороший flamegraph | отдельная зависимость |

Для демо блокировки event loop удобнее бить `/slow` (Clinic).
Для чистого CPU hot-path — `cpu-hot.js` (`--cpu-prof` / `0x`).

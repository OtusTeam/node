import async_hooks from 'async_hooks';
import { performance, PerformanceObserver } from 'perf_hooks';
import fs from 'fs';

// Сохраняем имя меток в Map
const timings = new Map();

const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {
    const label = `init-${asyncId}`;
    performance.mark(label);
    timings.set(asyncId, label);
  },
  destroy(asyncId) {
    const startMark = timings.get(asyncId);
    if (startMark) {
      const endMark = `destroy-${asyncId}`;
      performance.mark(endMark);
      performance.measure(`duration-${asyncId}`, startMark, endMark);
      timings.delete(asyncId);
    }
  },
});
hook.enable();

const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    fs.writeSync(1, `🕒 ${entry.name}: ${entry.duration.toFixed(2)} ms\n`);
  }
});
observer.observe({ entryTypes: ['measure'], buffered: true });

// Пример асинхронной операции
setTimeout(() => {
  console.log("I'm a timeout");
}, 1200);
// Синхронный CPU-цикл блокирует event loop:
// отложенные задачи (setTimeout) не выполняются, пока цикл не закончится.

setTimeout(() => {
  console.log('timeout');
}, 0);

console.log('heavy start');

let sum = 0;
for (let i = 0; i < 5e8; i++) {
  sum += i;
}

console.log('heavy done', sum);

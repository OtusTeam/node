// Короткая CPU-задача, которая сама завершается.
// Удобно для node --cpu-prof и 0x (не нужен HTTP/Ctrl+C).

function heavy(n = 5e7) {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Math.sqrt(i);
  }
  return sum;
}

console.log('cpu-hot start');
console.time('heavy');
const result = heavy();
console.timeEnd('heavy');
console.log('result', result);

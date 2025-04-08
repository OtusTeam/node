const { setTimeout } = require('node:timers/promises'); //
const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('sync-event', () => {
  const start = Date.now();

  console.time('sync');

  while (Date.now() - start < 500) {
    Math.sqrt(Math.random() * Math.random());
  }

  console.timeEnd('sync');

  console.log('Show sync');
  console.log('Show sync');
})


myEmitter.on('async-event', async () => {
  await setTimeout(500);
  
  console.log('Show after timeout');
})

console.log('Before 1'); // 1
myEmitter.emit('sync-event'); // синхронный код
console.log('After 1'); // 


console.log('Before 2'); // 4
myEmitter.emit('async-event'); // 6
console.log('After 2'); // 5

// Before 1
// Show sync
// Show sync
// After 1
// Before 2
// After 2
// Show after timeout

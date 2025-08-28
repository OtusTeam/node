const EventEmitter = require('node:events');

// EventEmitter - или создавать экземпляр, либо просто через extends наследуемся от него.

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

function handler(payload) {
  console.log('an event occurred!', payload)
}

function handler2(payload) {
  console.log('an event occurred 2!', payload)
}


// Подписались
// name - любой
myEmitter.on('event', handler)
myEmitter.on('event', handler2)

myEmitter.emit('event', { key: 'value' } ); // На шаге делает следующее
// console.log('an event occurred!', payload)
// console.log('an event occurred 2!', payload)

myEmitter.off('event', handler)


myEmitter.emit('event', { key: 'value2' } )


// Блокирующие и не блокирующие задачи.
// Важный вывод - мы можем блокировать эвент лупп -> не блокирующие задачи застрянут
// Метрика которая позволяет оценить event loop delay
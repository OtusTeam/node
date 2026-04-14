// const test = () => {
//   console.time('x')
//   setTimeout(() => console.timeEnd("x"), 100)
//   setTimeout(() => console.timeEnd("x"), 1000)
// }
// test()
// test()

import { performance } from 'node:perf_hooks';

console.log(performance.now());
// console.log(new Date().getTime());

const start = performance.now();
const startDate = new Date().getTime();
let sum = 0;
for (let i = 0; i < 1000000; i++) {
  // console.log(i);
  sum += i;
}
console.log(sum);
const duration = performance.now() - start;
const durationDate = new Date().getTime() - startDate;
console.log('duration', duration);
console.log('durationDate', durationDate);
// import pino from 'pino';

// const logger = pino();

// a();

// function a() {
//   b();
// }

// function b() {
//   c()
// }

// function c() {
//   const targetObject = {}

//   logger.info('before', targetObject.stack); // stdout

//   Error.captureStackTrace(targetObject)

//   logger.error(targetObject.stack);
//   // console.trace('stack trace');
// }

// Как это делается в продакше
// 1. Error tracking - или сами пишем ПО, готовое ПО sentry/rollbar
// 2. Нам нужен нормальный logger.
// 3. Сборщик всех логов централизированный, типо ELK(Elasticsearch, logstash, kibana) - Loki


// {"level":30,"time":1531171074631,"msg":"hello world","pid":657,"hostname":"Davids-MBP-3.fritz.box"}
// {"level":30,"time":1531171082399,"msg":"hello child!","pid":657,"hostname":"Davids-MBP-3.fritz.box","a":"property"}

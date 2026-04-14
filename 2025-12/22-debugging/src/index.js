// import { performance } from 'perf_hooks';

const start = performance.now(); // new Date().getTime()

let sum = 0;

for (let i = 0; i < 1000000000; i++) {
  sum += i;
}

// console.log(sum);

const end = performance.now(); // new Date().getTime()
const latency = end - start;

console.log('latency', latency);

// frontend + backend.
// requestId желательно уже на fronte делать
// requestId для идемпотентности.

// Метрика сколько endpoint работал.

// Логгировать только error + warning + info + debug

// message + meta info
// traceId/requestId. Как мета информация. 
// Желательно собирать всё в одну кучу. ELK - Elastic Search Logstash Kibana
// К логгерам можно подкрутить системы error tracing. Sentry и т.д.

// {"level":"error","message":"Error message","timestamp":"2022-09-20T11:39:33.953Z"}

// {"level":"warn","message":"Warning message","timestamp":"2022-09-20T11:39:33.957Z"}

// {"level":"info","message":"Info message","timestamp":"2022-09-20T11:39:33.957Z"}


// Нету доступа до числа - выводит в stdout

const tracingObj = {};

a()

function a() {
  b();
}

function b() {
  c();
}

function c() {
  // Подключить к нему свойство stack
  // Error.captureStackTrace(tracingObj);

  // console.log(tracingObj.stack);

  console.log(Error.stackTraceLimit);

  // console.trace(); // trace в консоле. А мы хотим его получить.
}


// class UserError extends Error {};

// throw new UserError();

// const [err, data] = goWayFunction();

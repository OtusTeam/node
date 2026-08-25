// Один файл = main thread или worker (флаг isMainThread).

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('node:worker_threads');

if (isMainThread) {
  mainThread();
} else {
  childThread();
}

function mainThread() {
  const worker = new Worker(__filename, {
    workerData: { value: 42 },
  });

  worker.on('message', (msg) => {
    console.log('main got:', msg);
    worker.terminate();
  });

  worker.postMessage('Hello, worker!');
}

function childThread() {
  console.log('workerData:', workerData);

  parentPort.on('message', (msg) => {
    console.log('worker got:', msg);
    parentPort.postMessage(msg.toUpperCase());
  });
}

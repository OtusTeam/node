const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

console.log('isMainThread', isMainThread);

if (isMainThread) {
  const worker = new Worker(__filename, {
    workerData: {
      value: 42
    }
  });

  // Подписываемся на сообщения от потока.
  worker.on('message', (msg) => {
    console.log(`Message from worker: ${msg}`);
  });

  // Можем через postMessage
  worker.postMessage('Hello, worker!');
} else {
  // Этот код уже относиться к потоку.

  console.log(`Worker data: ${workerData.value}`);

  // Подписывается на сообщения
  parentPort.on('message', (msg) => {
    console.log(`Message from main thread: ${msg}`);
    // Сам слать сообщения в процесс.
    parentPort.postMessage(msg.toUpperCase());
  });
}

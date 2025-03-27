const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// 1. Мы запускаем скрипт isMainThread = true
// 2. Он запускает тот же скрипт isMainThread = false
// 3. Разделение на осноной процесс и подпоток через флаг isMainThread

console.log('isMainThread', isMainThread);


if (isMainThread) {
  // Main
  mainThread()
} else {
  childThread();
}

function mainThread() {
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
}

function childThread() {
  // Этот код уже относиться к потоку.

  console.log(`Worker data: ${workerData.value}`);

  // Подписывается на сообщения
  parentPort.on('message', (msg) => {
    console.log(`Message from main thread: ${msg}`);
    // Сам слать сообщения в процесс.
    parentPort.postMessage(msg.toUpperCase());
  });

  // parentPort.close();
}
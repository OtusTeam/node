// Скрипт и мы запускаем его же, но в режиме child thread
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// 1. Мы запускаем скрипт isMainThread = true
// 2. Он запускает тот же скрипт isMainThread = false
// 3. Разделение на осноной процесс и подпоток через флаг isMainThread

console.log('isMainThread', isMainThread);


if (isMainThread) {
  // Main
  mainThread();
} else {
  childThread();
}

function mainThread() {
  const worker = new Worker(__filename, {
    // как передать данные в поток.
    workerData: {
      value: 42
    }
  });

  // Подписываемся на сообщения от потока.
  worker.on('message', (msg) => {
    console.log(`Main Thread: Message from worker: ${msg}`);
  });

  // Можем через postMessage
  worker.postMessage('Hello, worker!');
}

function childThread() {
  // Этот код уже относиться к потоку.
  console.log(`Child Thread: Worker data:`, workerData);

  // Подписывается на сообщения
  // Слушаем сообщения
  parentPort.on('message', (msg) => {
    console.log(`Child Thread: Message from main thread: ${msg}`);
    // Сам слать сообщения в процесс.
    parentPort.postMessage(msg.toUpperCase());
  });

  // parentPort.close();
}
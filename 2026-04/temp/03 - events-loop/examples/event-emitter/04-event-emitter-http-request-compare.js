const { setTimeout } = require('node:timers/promises');
const EventEmitter = require('events')
const myEmitter = new EventEmitter()

// myEmitter - HTTP Server
// on - get - слушаем метод get для endpoint-а event
// handler - это обработчик запроса
// res.send({}) - это emit отправки ответ от сервера.

myEmitter.on('event', async (req, res) => {
  await setTimeout(500);
  
  console.log('Show after timeout');
})


// HTTP GET /event
// handler
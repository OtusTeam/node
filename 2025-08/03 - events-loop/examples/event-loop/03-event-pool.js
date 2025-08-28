const fs = require('fs')

// Сработает после всех nextTick и sync, но ДО setImmediate
setTimeout(() => console.log('timeout out')) // 3
setImmediate(() => console.log('immediate out')) // 4

fs.readFile('./examples/event-loop/03-event-pool.js', (err, data) => {
  // Это I/O callback (фаза: poll)
  console.log('fs') // 5

  process.nextTick(() => console.log('next in')) // 6 — микрозадача после fs
  setTimeout(() => console.log('timeout in')) // 8 — таймер пойдёт в следующую фазу timers
  setImmediate(() => console.log('immediate in')) // 7 — фаза check
})

const next = () => {
  console.log('next') // 1 — синхронный, но в process.nextTick
}

process.nextTick(next) // 2 — микрозадача, выполнится перед setTimeout / setImmediate


// next                  // 1 — process.nextTick
// timeout out           // 2 — setTimeout (после всех microtasks)
// immediate out         // 3 — setImmediate (из check-фазы)
// fs                    // 4 — fs.readFile I/O завершился (фаза poll)
// next in               // 5 — микрозадача из I/O колбэка
// immediate in          // 6 — setImmediate из I/O (check-фаза после poll)
// timeout in            // 7 — setTimeout из I/O (попал в след. фазу timers)

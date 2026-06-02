const { setInterval } = require('node:timers/promises')

// setInterval(() => {
//   console.log('tick');
// }, 1000)

async function tick() {
  for await (const test of setInterval(1000)) {
    console.log('tick');
  }
}

tick();

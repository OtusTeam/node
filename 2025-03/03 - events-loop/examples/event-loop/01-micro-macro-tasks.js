console.log('script start'); // 1

setTimeout(function () {
  console.log('setTimeout');
}, 0) // 6

setImmediate(() => {
  console.log('setImmediate');
}) // 7

process.nextTick(() => {
  console.log('nextTick');
}) // 3

Promise.resolve()
  .then(function () {
    console.log('promise1'); // 4
  })
  .then(function () {
    console.log('promise2');  // 5
  })

console.log('script end'); // 2


// script start
// script end
// nextTick
// promise1
// promise2
// setTimeout
// setImmediate

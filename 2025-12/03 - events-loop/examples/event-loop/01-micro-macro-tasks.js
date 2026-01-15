// При старте скрипта у нас есть фаза выполнения скрипта и фаза формирования event loop.

// console.log('script start'); // 1

// setTimeout 1
// nextTick 2
// promise1
// promise2
// setTimeout 1_2
// setImmediate 2

timers: [

];
check: [];

// Loop 1
// Добавили setTimeout 1 в timers
// Добавили setTimeout 2 в timers
// Loop 2
// Выполнение setTimeout 1
// Во время выполнения 

/*
setTimeout 1
end setTimeout 1
nextTick1
promise1
promise2
end setTimeout2
setImmediate 1
*/

setTimeout(function setTimeout1 () {
  console.log('setTimeout 1');

  // setTimeout(function () {
  //   console.log('setTimeout 2');
  // }, 0);

  process.nextTick(function nextTick1 () {
    console.log('nextTick1');
  })

  Promise.resolve()
    .then(function promise1() {
      console.log('promise1'); // 4
    })
    .then(function promise1() {
      console.log('promise2');  // 5
    })

  // setImmediate
  setImmediate(function setImmediate1 () {
    console.log('setImmediate 1');
  });
    
  setTimeout(function setTimeout3 () {
    console.log('end setTimeout3');
  }, 0);

    console.log('end setTimeout 1');
}, 0) // 6

setTimeout(function setTimeout2 () {
  console.log('end setTimeout2');
}, 0);


setImmediate(function setImmediate2() {
  console.log('setImmediate 2');
}) // 7

// Promise.resolve()
//   .then(function () {
//     console.log('promise1'); // 4
//   })
//   .then(function () {
//     console.log('promise2');  // 5
//   })

// process.nextTick(() => {
//   console.log('nextTick');
// }) // 3

// console.log('script end'); // 2


// script start
// script end
// nextTick - микротаска
// promise1 - микротаска
// promise2 - микротаска
// setTimeout
// setImmediate

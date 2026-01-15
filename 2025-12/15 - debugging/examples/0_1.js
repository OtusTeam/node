import { PerformanceObserver, performance } from 'node:perf_hooks';

// const start = performance.now();

// const test = () => {
//     const start = performance.now();

//     setTimeout(() => {
//         const end = performance.now();

//         console.log(end - start);
//     }, 100)
// }
// test()


const obs = new PerformanceObserver((items) => {
  const entities = items.getEntries();
  console.log(items);

  console.log(entities[0].name, entities[0].duration);
});

obs.observe({ type: 'measure' });
performance.measure('Start to Now');

(async function doSomeLongRunningProcess() {
  performance.mark('A');
  await new Promise((r) => setTimeout(r, 1000));
  performance.measure('A to Now', 'A');

  performance.mark('B');
  performance.measure('A to B', 'A', 'B');

  performance.mark('C');
  performance.measure('B to C', 'B', 'C');
})();

// commit 1 - всё работает
// commit 50 - проверяем работает или нет? Не работает, то идет на 25, если работает на 75
// commit 100 - не работает

/*
function a() {
    console.time('1');
    a1();
    console.timeEnd('1');

    console.time('2');
    a2();
    console.timeEnd('2');

    console.time('3');
    a3();
    console.timeEnd('3');
}
*/

function doSomething() {
  throw new Error('test'); // Проще сделать так.
}

// function doSomethingMonad() {
//   const res = { name: 'nik'};

//   const error = new Error('test');

//   // return { error }; // { res } или { error };
//   // return [res, error];
//   return [error, res];
// }

/// 400 - Bad Request
/// 400001 - Validation Error
/// status = 400, statusExt = 400001
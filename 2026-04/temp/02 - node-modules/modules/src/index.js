// const got = require('got');

console.log(__dirname);

// асинхроная загрузка через import
;(async() => {
  const got = await import('got');

  // console.log(got);
})();

// CommonJS и ECMAScript Module

// import * as ecmaModule from './ecma-module.js'


// ecma, { a, aFunc }, 

// console.log(ecmaModule);

// console.log(import.meta);

// console.log(ecma);
// console.log(a);
// aFunc();

// export * from './ecma-module.js'





















// const got = require('got')

// console.log(got)

// // Сейчас common js

// import commonjs from './commonjs.js';
// import ecmajs from './ecma.mjs';

// console.log(commonjs)
// console.log(ecmajs)
// // console.log(ecmajs) // ec

// // ;(async() => {
// //   const res = await import('./ecma.js');

// //   console.log(res.default)
// // })()

// // // 




























// const jest = require('jest')
// const express = require('express')

// console.log(jest)
// console.log(express)


// const myModule = ((name) => {
//   return {
//     sayHello() {
//       return `Hello ${name}`
//     }
//   }
// })('nik');

// console.log(myModule.sayHello())
// 1. Есть входные данные(зависимости)
// 2. Есть внешний интерфейс
// 3. Есть скрытие реализации(изолированость).

// Нужна система оркестрации модулей



// import cjs from './commonjs.js';
// const ecma = import('./ecma.mjs');

// ecma.then((res) => {
//   console.log(res.default)
// })
// console.log(cjs)

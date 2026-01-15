// import express from 'express';

// import - подключить модуль

import { aName as aNewName, aNameFunc } from './a.js';
import bModule from './b.js';

import './script.js';
// require('./script');

console.log(aNewName)
console.log(aNameFunc())

console.log('meta', import.meta)
// url: 'file:///home/nik/projects/webinar/node-js/index.js'

import('./a.js').then((m) => {
  console.log('a', m)
})

;(async() => {
  console.log(await bModule.bName())
})()


// Входная точка - это index.js
// Добавить метод в exports







// const a = require('./a');
// const b = require('./b');

// console.log(a.aName);
// console.log(b.bName);

// // Глобальные модули - path, fs, http, crypto и т.д.
// // Зависимости глобальные - это то, что добавляется через npm i -g
// // Локальные зависимости - это то, npm i
// // Локальные файлы - абсолютные и относительные пути.

// const express = require('express');
// // 1. Будет искать node_modules в папке со скриптом
// // 2. Пойдет в корень проекта и будет смотреть там зависимость.
// // 3. Пойдет в global.

// const myModule = require('./my-module') // директория

// console.log(myModule)




// require - подключить другой модуль
// module.exports или exports - прописать выходные данные из модуля.

// Подключить полностью
// const a1 = require('./a'); // ext не пишем есть ли .js, .json, .node

// console.log('before aName', a1.aName)

// Не резолвит заново
// const a2 = require('./a');

// require.resolve('./a') - путь до нашего файл.

// console.log('__dirname', __dirname) // /home/nik/projects/webinar/node-js


// console.log('after aName', a2.aName)

// './a' - он '/home/nik/projects/webinar/node-modules/a.js'

// cache: [Object: null prototype] {
//   '/home/nik/projects/webinar/node-modules/index.js': Module {
//     id: '.',
//     path: '/home/nik/projects/webinar/node-modules',
//     exports: {},
//     filename: '/home/nik/projects/webinar/node-modules/index.js',
//     loaded: false,
//     children: [Array],
//     paths: [Array]
//   },
//   '/home/nik/projects/webinar/node-modules/a.js': Module {
//     id: '/home/nik/projects/webinar/node-modules/a.js',
//     path: '/home/nik/projects/webinar/node-modules',
//     exports: [Object],
//     filename: '/home/nik/projects/webinar/node-modules/a.js',
//     loaded: true,
//     children: [Array],
//     paths: [Array]
//   },
//   '/home/nik/projects/webinar/node-modules/b.js': Module {
//     id: '/home/nik/projects/webinar/node-modules/b.js',
//     path: '/home/nik/projects/webinar/node-modules',
//     exports: [Object],
//     filename: '/home/nik/projects/webinar/node-modules/b.js',
//     loaded: true,
//     children: [],
//     paths: [Array]
//   }
// }


// console.log(a);
// console.log(aName);
// bName();


































// // console.log(exports, require, module, __filename, __dirname)
// import express from 'express'

// console.log(process.argv)

// // https://www.npmjs.com/package/commander
// // @uirouter/core

// import testModule, { name, myFunction as myNewFunction } from './test.js'
// import * as test  from './test.js'


// const app = express()

// console.log(cjs)

// // Node.JS. Паттерны проектирования. Mario Casciaro

// app.listen(3000, () => console.log('3000 port'))

// // 1 способ: использовать *.mjs
// // 2 способ: в package.json прописать "type": "module",

// /*
// {
//   default: { name: 'test', myFunction: [Function: myFunction] },
//   myFunction: [Function: myFunction],
//   name: 'test'
// }

// */
// //console.log(testModule, name, myNewFunction)
// // { name: 'test', myFunction: [Function: myFunction] } test [Function: myFunction]

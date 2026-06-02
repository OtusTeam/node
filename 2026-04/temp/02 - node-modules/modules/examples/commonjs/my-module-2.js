const fs = require('node:fs');
const express = require('express');



// console.log(require.cache);


console.log('my-module-2.js 1');
const myModule1 = require('./my-module-100');
console.log('my-module-2.js 2');

console.log(myModule1.name);
myModule1.show()

myModule1.name = 'nik100500';
myModule1.show();

// console.log(require.cache);

console.log(__dirname, __filename);
console.log(require.resolve('express'));
console.log(express);

































// console.log(fs);


// Подключаем другой модуль.
// В данном случае, это локальный модуль.

// console.log(require.cache);


// console.log(require.cache);

// console.log(myModule1.show());

// myModule1.name = 'nextt';

// console.log(myModule1.show());

// // console.log(require.cache);
// console.log(require.resolve('./my-module-1'));

// // console.log(myModule1);

// // myModule1.name = 'nik100500';

// console.log('my-module 2 init');

// module.exports = {
//   name: 'nik2',
//   show() {
//     console.log('hello world2')
//   }
// }

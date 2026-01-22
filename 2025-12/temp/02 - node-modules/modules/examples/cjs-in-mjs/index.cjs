// index.cjs
'use strict';

// const got = require('got');

// ;(async() => {
//     const got = await import('got');

//     console.log(got);
// })();

// console.log(got);

module.exports = {
    test: 'test'
};


// В NodeJS 20 не работает или через import
// В NodeJS 22 работает с флагом node --experimental-require-module ./examples/cjs-in-mjs/index.cjs
// В NodeJS 23 работает без флага
// console.log(require('./hello.mjs').hello);

// const got = require('got');

;(async() => {
  const got = await import('got');

  console.log(got);
})();

// express 
// const express = require('express');

// console.log(express);


// console.log('index.js 1');
// // console.log('before cache',require.cache);
// const myModule1 = require('./my-module-1');
// // console.log('after cache',require.cache);
// console.log('index.js 2');
// delete require.cache[require.resolve('./my-module-1')]
// const myModule2 = require('./my-module-2');
// console.log('index.js 3');
// // console.log('end cache',require.cache);

// // console.log(myModule1);

// console.log(require.resolve('express'));

// myModule1.show();
// myModule2.show();

// console.log(myModule1.name);

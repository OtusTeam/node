console.log('my-module 1 init file');

let sum = 0;

// console.time('100');

// for (let i = 0; i < 1000000000; i++) {
//   sum += i;
// }
// console.timeEnd('100');

console.log('my-module 1 init file end');

const output = {
  name: 'nik1',
  show() {
    console.log('hello world1', output.name)
  }
};

module.exports = output;
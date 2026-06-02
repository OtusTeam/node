
// const shared = require('./shared');


// console.log('module shared in file b', shared);


module.exports = {
  method() {
    const a = require('./a');

    console.log(a.method2());
    console.log('module a in file b', a);

    console.log('b');
  }
}

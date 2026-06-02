// const shared = require('./shared');
const b = require('./b');

// setTimeout(() => {
//   console.log(b.bModule());
// });

// console.log('module b in file a', shared);

module.exports = {
  method() {
    console.log('a');

    b.method();

    // shared.shared();
  },
  method2() {
    console.log('a2')
  },
  async fn() {
    return await asyncFn();
  }
}

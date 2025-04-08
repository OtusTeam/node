// const shared = require('./shared');
const b = require('./b');

// setTimeout(() => {
//   console.log(b.bModule());
// });

// console.log('module b in file a', shared);

module.exports = {
  aModule() {
    console.log('a');

    b.bModule();

    // shared.shared();
  },
  async fn() {
    return await asyncFn();
  }
}

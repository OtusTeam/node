console.log('my-module 1 init in directory')

console.time('test');

for (let i = 0; i < 100000000; i++) {

};

console.timeEnd('test');

module.exports = {
  name: 'nik1 directory',
  show() {
    console.log('hello world1', this.name);
  }
}

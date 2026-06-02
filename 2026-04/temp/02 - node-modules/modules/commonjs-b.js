const moduleA = require('./commonjs-a');

console.log(moduleA);

module.exports = {
  name: 'b-module-name',
  aModuleName: moduleA.name
}

const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
const argv = yargs(process.argv).argv

console.log(typeof argv.n);
console.log(process.argv);
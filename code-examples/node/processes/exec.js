const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function lsExample() {
  const pr = await exec('ls')
  console.log('pr:', pr)
}
lsExample()
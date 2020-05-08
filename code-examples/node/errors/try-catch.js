try {
  require('fs').readdir('./', (err, res) => {
    throw new Error('test');
  });
} catch(e) {
  console.log('error')
}
 
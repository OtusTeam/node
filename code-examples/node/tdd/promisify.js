/* 
 * createServer(a, b, (err, res) => {})
 * 
 * createServerPromise = promisify(createServer)
 * createServerPromise(a, b)
 * .then((res) => {})
 * .catch((err) => {})
 */ 

 module.exports = function promisify(fn) {
   return () => new Promise(() => {})
 }
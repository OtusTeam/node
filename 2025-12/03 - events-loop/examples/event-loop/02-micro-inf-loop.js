setTimeout(() => console.log('timeout')); 

function myAsync(start = 0) {
  console.log(start)

  if (start === 50000) {
    return;
  }

  return Promise.resolve(start + 1).then(myAsync)
}

console.clear()
myAsync()


// function asyncRecursion(count) {
//   if (count >= 5) return;
//   console.log(count);
//   setImmediate(() => asyncRecursion(count + 1)); // Не переполняет стек
// }
// asyncRecursion(0);
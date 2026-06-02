// Это механизм отложенного выполнения кода после завершения текущей операции, но до следующей итерации event loop.


let bar;
function someAsyncApiCall(callback) {
  process.nextTick(callback);
}
someAsyncApiCall(() => {
  console.log('bar', bar); // ✅ 1
});
bar = 1;
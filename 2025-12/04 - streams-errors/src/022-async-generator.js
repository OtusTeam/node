function* myGenerator(startNum = 1, endNum = 10) {
  for (let i = startNum; i <= endNum; i++) {
    console.log('before', i);
    yield i * 1.5;
    console.log('after', i);
  }
}

// Использование генератора
for (let num of myGenerator()) {
  console.log(num);
}

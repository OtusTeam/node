function* myGenerator() {
  for (let i = 1; i <= 5; i++) {
      console.log('before', i);
      yield i * 2;
      console.log('after', i);
  }
}

// Использование генератора
for (let num of myGenerator()) {
  console.log(num);
}

function* myGenerator() {
  for (let i = 1; i <= 5; i++) {
      yield i;
  }
}

// Использование генератора
for (let num of myGenerator()) {
  console.log(num);
}

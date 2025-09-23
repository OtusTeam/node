class MyIterator {
  constructor(current = 1, max = 5) {
      this.current = current;
      this.max = max;
  }

  next() {
      if (this.current <= this.max) {
          return { value: this.current++ * 1.5, done: false };
      } else {
          return { value: undefined, done: true };
      }
  }

  [Symbol.iterator]() {
      return this;
  }
}

// Использование итератора
// [1,2,3,4,5]
const myIter = new MyIterator(1, 10);
for (let num of myIter) {
  console.log(num);
}

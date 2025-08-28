class MyIterator {
  constructor() {
      this.current = 1;
      this.max = 5;
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
const myIter = new MyIterator([1,2,3,4,5]);
for (let num of myIter) {
  console.log(num);
}

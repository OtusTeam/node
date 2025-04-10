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
const myIter = new MyIterator();
for (let num of myIter) {
  console.log(num);
}

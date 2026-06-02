class MyIterator {
    constructor(current = 1, max = 5) {
        this.current = current;
        this.max = max;
    }

    next() {
        if (this.current <= this.max) {
            return { value: this.current++ * 2, done: false };
        } else {
            return { value: undefined, done: true };
        }
    }

    // с ключом interator не конфликует

    [Symbol.iterator]() {
        return this;
    }
}

// И

// Использование итератора
// [1,2,3,4,5]

// делаю итератор, который просто будет в диапазоне от min/max в цикл пробрасывать значения
const myIter = new MyIterator(1, 10);

// Нету условия выхода.
// for of работал
for (let num of myIter) {
    console.log(num);
}

// obj - мы хотим сделать его итерируемы


const obj = {
    key1: 'valu1',
    key2: 'value2',
    ///
    // служебное поле
    uniqPrivateKey: 'test',

    [Symbol.iterator]: () => {
        return {
            next: () => {
                return { value: 'new-iter', done: false }
            }
        }
    }
}

for (let value of obj) {
    console.log(value);
}


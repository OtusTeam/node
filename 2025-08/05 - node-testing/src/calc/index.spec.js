const calc = require('./');

// jest

// before - 
// after
// beforeEach
// afterEach

// Как я делаю, чтобы защитися от случайных кредов с продакшена

// Я не использую переменные окружения внутри класса.
/*
class Database {
  constructor(options) {

  }

  // dropCollection() {
    // Добавить явную проверку, что это e2e среда.
  }
}

class DatabaseE2E extends Database {
  constructor() {
    super({
      // креды явно прописываю для e2e среды.
    })
  }
}
*/

describe('calc.sum', () => {
  beforeEach(() => {
    console.log('before calc.sum');
  });

  afterEach(() => {
    console.log('after calc.sum');
  });

  // beforeEach(() => {
  //     console.log('before Each calc.sum');
  // })
  // Это должно суммировать два целочисленных числа
  test.skip('it should sum two integer number', () => {
    // arrange-act-assert;

    // arrange
    const a = 1;
    const b = 2;

    // act
    const result = calc.sum(a, b);

    // assert(expect)
    expect(result).toBe(3);
  })
})

describe('calc.sub', () => {
  // Хуки, которые запускаются до тестов и после тестов.
  // before - один раз до всех тестов
  // after - один раз после тестов.
  // beforeEach - каждый раз до каждого теста
  // afterEach- каждый раз после каждого теста

  // Это должно суммировать два целочисленных числа
  test('it should sub two integer number', () => {
    // arrange-act-assert;

    // arrange
    const a = 2
    const b = 1

    // act
    const result = calc.sub(a, b)

    // assert(expect)
    expect(result).toBe(1);
  });

  test('it should sub two integer number', () => {
    // arrange-act-assert;

    // arrange
    const a = 1
    const b = 2

    // act
    const result = calc.sub(a, b)

    // assert(expect)
    expect(result).toBe(-1);
  });
})

describe('calc.multi', () => {
  // Это должно суммировать два целочисленных числа
  test('it should mul two number', () => {
    // arrange-act-assert;

    // arrange
    const a = 2
    const b = 5

    // act
    const result = calc.multi(a, b)

    // assert(expect)
    expect(result).toBe(10);
  })

  test('it should throw error if one number is string', () => {
    // arrange-act-assert;

    // arrange
    const a = '2'
    const b = '5'

    // assert(expect)
    expect(() => calc.multi(a, b)).toThrow(new Error('a is not a number'));
  })
})


// describe - test.
// describe - группу тестов.

// beforeEach(() => {
//   console.log('before Each global');
// })

// before(() => {
//   // start server
//   // start db
//   // mock запуск
// })

// after(() => {
//   // stop server
//   // stop db
//   // mock почисти
// })
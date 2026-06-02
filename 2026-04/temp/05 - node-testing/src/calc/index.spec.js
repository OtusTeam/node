const calc = require('./');

// jest

// before - прогреть наше окружение. Запустить сервер, бд подключение, данные добавить т.д. 
// after - все завершить.
// beforeEach
// afterEach

// Как я делаю, чтобы защитися от случайных кредов с продакшена

// Я не использую переменные окружения внутри класса.
/*
class Database {
  // Все креды через options передаются.
  constructor(options) {

  }

  // truncateTable() {
    // Добавить явную проверку, что это e2e среда.
    // Если нет, то ошибка.
  }
}

// Не удалялть на прямую, а через helper

class DatabaseE2E extends Database {
  constructor() {
    super({
      username: 'user', // отдельные переменные окружения для E2E
      // если они не определены, то выбрасывать ошибку.
      password: 'password'
      // креды явно прописываю для e2e среды.
    })
  }
}
*/

describe('calc.sum', () => {
  // beforeEach(() => {
  //   console.log('before calc.sum');
  // });

  // afterEach(() => {
  //   console.log('after calc.sum');
  // });

  // beforeEach(() => {
  //     console.log('before Each calc.sum');
  // })
  // Это должно суммировать два целочисленных числа
  test('it should sum two integer number', () => {
    // arrange-act-assert;

    // arrange определяем входные данные для тестирования.
    const a = 1;
    const b = 2;

    // act
    const result = calc.sum(a, b);

    // assert(expect)
    expect(result).toBe(3);
  });

  test('it should sum two integer number', () => {
    // arrange-act-assert;

    // arrange определяем входные данные для тестирования.
    const a = 0.1;
    const b = 0.2;

    // act
    const result = calc.sum(a, b);

    // assert(expect)
    expect(result).toBe(0.30000000000000004);
  });
})

describe('calc.sub', () => {
  // Внутри скоупа
  // Хуки, которые запускаются до тестов и после тестов.
  // before - один раз до всех тестов
  // after - один раз после тестов.
  // beforeEach - каждый раз до каждого теста
  // afterEach- каждый раз после каждого теста

  afterEach(() => {
    console.log('after Each calc.sub');
  });

  beforeEach(() => {
      console.log('before Each calc.sub');
  });

  afterAll(() => {
    console.log('after calc.sub');
  });

  beforeAll(() => {
      console.log('before calc.sub');
  });

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

describe('calc.devide', () => {
  // Это должно суммировать два целочисленных числа
  test('it should devide two number', () => {
    const a = 6
    const b = 2

    const result = calc.devide(a, b)

    expect(result).toBe(3);
  })

  test('it should devide two number', () => {
    const a = '6.00'
    const b = '2'

    expect(() => calc.devide(a, b)).toThrow(new Error('a is not a number'));
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
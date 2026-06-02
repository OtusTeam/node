module.exports = {
  // Используем SWC для быстрой компиляции (вместо ts-jest)
  transform: {
    '^.+\\.(t|j)sx?$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            decorators: true,
            dynamicImport: true,
          },
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
          target: 'es2021',
          keepClassNames: true,
        },
        module: {
          type: 'commonjs',
        },
        sourceMaps: true,
      },
    ],
  },

  // Расширения файлов для тестирования
  moduleFileExtensions: ['js', 'json', 'ts'],

  // Корневая директория для тестов
  rootDir: 'src',

  // Паттерн для поиска тестовых файлов
  testRegex: '.*\\.spec\\.ts$',

  // Окружение для тестов
  testEnvironment: 'node',

  // Настройки покрытия кода
  collectCoverageFrom: [
    '**/*.(t|j)s',
    '!**/*.spec.ts',
    '!**/*.interface.ts',
    '!**/*.dto.ts',
    '!**/*.entity.ts',
    '!**/*.schema.ts',
    '!**/main.ts',
    '!**/*.module.ts',
  ],

  // Директория для отчетов о покрытии
  coverageDirectory: '../coverage',

  // Порог покрытия (можно настроить для строгих требований)
  coverageThreshold: {
    global: {
      branches: 70,
      functions: 70,
      lines: 70,
      statements: 70,
    },
  },

  // Показывать покрытие для всех файлов, даже без тестов
  collectCoverage: false,

  // Включить verbose режим для детального вывода
  verbose: false,

  // Настройки для параллельного выполнения тестов
  maxWorkers: '50%',

  // Таймаут для тестов (в миллисекундах)
  testTimeout: 10000,

  // Очистка моков между тестами
  clearMocks: true,

  // Восстанавливать моки после каждого теста
  restoreMocks: true,

  // Форматы отчетов о покрытии
  coverageReporters: ['text', 'text-summary', 'html', 'lcov', 'json'],

  // Игнорировать паттерны
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Настройки для модулей
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/$1',
  },

  // Настройки для setup файлов
  setupFilesAfterEnv: ['<rootDir>/../test/setup.ts'],

  // Отчеты (можно добавить jest-html-reporters для HTML отчетов)
  reporters: ['default'],
};

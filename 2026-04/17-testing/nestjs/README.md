# NestJS Testing Project

Проект демонстрирует различные виды тестирования в Node.js с использованием NestJS, включая TDD и BDD подходы.

## Структура проекта

```
src/
├── auth/              # Модуль авторизации с JWT
│   ├── dto/
│   ├── guards/
│   ├── strategies/
│   └── auth.service.ts
├── users/             # Модуль пользователей с CRUD
│   ├── dto/
│   ├── schemas/
│   ├── users.controller.ts
│   └── users.service.ts
└── main.ts
test/
└── app.e2e-spec.ts    # E2E тесты с Supertest
```

## Возможности

- ✅ CRUD операции для пользователей
- ✅ JWT авторизация
- ✅ MongoDB с in-memory для тестов
- ✅ Unit тесты для сервисов
- ✅ E2E тесты для REST API с Supertest
- ✅ Валидация данных с class-validator

## Установка

```bash
npm install
```

## Запуск приложения

```bash
# Разработка
npm run start:dev

# Продакшн
npm run build
npm run start:prod
```

## Тестирование

### Unit тесты

```bash
# Запуск всех unit тестов
npm test

# Запуск в watch режиме (автоматический перезапуск при изменениях)
npm run test:watch

# С покрытием кода (HTML отчет в coverage/index.html)
npm run test:cov

# Детальный вывод всех тестов
npm run test:verbose

# Запуск тестов по паттерну имени
npm run test:only -- "should create"

# Запуск тестов для измененных файлов
npm run test:file
```

### E2E тесты

```bash
# Запуск e2e тестов
npm run test:e2e
```

## API Endpoints

### Авторизация

- `POST /auth/login` - Вход в систему
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```

### Пользователи (требуют авторизации)

- `POST /users` - Создать пользователя
- `GET /users` - Получить всех пользователей
- `GET /users/:id` - Получить пользователя по ID
- `PATCH /users/:id` - Обновить пользователя
- `DELETE /users/:id` - Удалить пользователя

## Примеры тестов

### Unit тесты (TDD подход)

Тесты для сервисов используют моки и стабы:

```typescript
// users.service.spec.ts
describe('UsersService', () => {
  it('should create a new user with hashed password', async () => {
    // Arrange
    const createUserDto = { ... };

    // Act
    const result = await service.create(createUserDto);

    // Assert
    expect(bcrypt.hash).toHaveBeenCalled();
    expect(result).toBeDefined();
  });
});
```

### E2E тесты (BDD подход)

Тесты для API используют Supertest и in-memory MongoDB:

```typescript
// app.e2e-spec.ts
describe('Users CRUD (e2e)', () => {
  it('/users (POST) - should create a new user', async () => {
    const response = await request(app.getHttpServer())
      .post('/users')
      .send(createUserDto)
      .expect(201);

    expect(response.body).toHaveProperty('_id');
  });
});
```

## Технологии

- **NestJS** - фреймворк для Node.js
- **MongoDB** - база данных
- **Mongoose** - ODM для MongoDB
- **Jest** - фреймворк для тестирования
- **SWC** - быстрый компилятор для TypeScript (вместо ts-jest)
- **Supertest** - библиотека для тестирования HTTP
- **mongodb-memory-server** - in-memory MongoDB для тестов
- **JWT** - авторизация
- **bcrypt** - хеширование паролей
- **class-validator** - валидация DTO

## Особенности Jest конфигурации

Проект использует **SWC** для компиляции TypeScript в тестах, что делает их выполнение в **20+ раз быстрее** чем с ts-jest.

### Дополнительные возможности:

- ✅ **Покрытие кода** с порогами (70% для всех метрик)
- ✅ **Watch режим** для автоматического перезапуска тестов
- ✅ **Verbose режим** для детального вывода
- ✅ **Параллельное выполнение** тестов
- ✅ **Автоматическая очистка моков** между тестами
- ✅ **HTML отчеты** о покрытии кода

Подробнее см. [JEST_CONFIG.md](./JEST_CONFIG.md)

## Переменные окружения

Создайте файл `.env`:

```env
MONGODB_URI=mongodb://localhost:27017/testdb
JWT_SECRET=your-secret-key
```

## Виды тестирования в проекте

1. **Unit тесты** - тестирование отдельных компонентов (сервисов) с моками
2. **E2E тесты** - тестирование полного потока через HTTP API
3. **Интеграционные тесты** - тестирование взаимодействия с базой данных

## Подходы к тестированию

- **TDD (Test-Driven Development)** - сначала пишем тесты, потом код
- **BDD (Behavior-Driven Development)** - тесты описывают поведение системы

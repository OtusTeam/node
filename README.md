# About

**Otus Node.js Developer Course** repository contains materials, presentations, examples and notes. This is a draft version.

Documents are using `markdown` format, and examples are techology specific.
Folders inside `./code-examples` represent different course block materials.

Please check [FAQ](./FAQ.md) for questions like "How to run markdown presentations".

Any contributions are welcome and have a nice coding!

# About Course

Node.js Разработчик - курс для JavaScript разработчиков, желающих глубоко изучить среду Node.js. Мы рассмотрим архитектуру серверной среды, внутреннее устройство, модули и библиотеки. Обсудим концепции и особенности Event Loop. 

Напишем Web Server на Express с авторизацией и веб сокетами на базе Socket.io.
В качестве примера сделаем REST API сервер с базой данных MongoDB. Научимся деплоить, заниматься отладкой и тестировать приложения.

Будем использовать TypeScript, подробно изучим Nest.js и GraphQL.
Разработаем, задеплоим и протестируем GraphQL API на базе Nest.js.

27 уроков и 4 модуля
- Особенности Node.js - 5
- Web Server с Express - 7
- Node.js в Проде, TypeScript - 7
- Nest.js и GraphQL - 8

Разработаем серверные приложения с использованием Node.js, Express, TypeScript, GraphQl, Apollo, Nest.js.

Что даст вам этот курс
- Глубокие знания архитектуры и дизайна Node.js, V8
- Навыки разработки с TDD
- Создание Server-side приложений с технологиями Express, Nest.js, Socket.io
- Понимание и опыт использования TypeScript
- Использование MongoDB, PostgreSQL в качестве базы данных, а также ORM - Mongoose, Sequelize
- Практические навыки создания GraphQl сервера с Apollo
- Опыт создания Real-time и CLI приложений

Node.js является современным популярным инструментом веб разработки, который позволяет создавать серверные приложения, используя JavaScript или TypeScript. Это является несомненным плюсом для Frontend разработчиков и облегчает порог входа.

За 4 месяца вы научитесь:
- Разрабатывать бэкенд любой сложности, используя Express, Passport, Jest, GtaphQL, Next.js
- Работать с базами данных MongoDB, PostgreSQL
- Использовать и настраивать CI/CD для своего проекта. Конфигурировать приложения для production и деплоить в Heroku
- Работать с Web Sockets (Socket.IO)
- Писать понятный и чистый код на TypeScript
- Разбираться в современных веб фреймворках (Nest.js, Express)

Для кого этот курс:
- FrontEnd и JavaScript разработчики
- BackEnd и FullStack инженеры, знакомые с JavaScript или TypeScript 

## Пример тем выпускных проектов

Заключительный месяц курса посвящен проектной работе. Это то, чем интересно заниматься студенту на базе знаний, полученных на курсе.
При этом не обязательно закончить его за месяц. В процессе написания по проекту возможно получить консультации преподавателей.

Проект должен стать примером кода, который можно показывать потенциальным работодателям.
Предлагаемые темы выпускного проекта:
- Образовательная платформа с возможность смотреть и редактировать медиа контент
- Сервер для хранения заметок с `git`
- `ORM` фреймворк
- `html` шаблонизатор

Возможные технологии для проектов - Node.js, GraphQL, Nest.js, Express 

## Особенности Node.js

> Обзор особенностей, возможностей и инфраструктуры Node.js, а также систему модулей.

### `1 (1.1)` Введение в Node.js and NPM

- Обзор и Установка Окружения Node.js
  - Конфигурация VSCode Debug
- Архитектура (V8, libuv)
- Пример Hello World
- Обзор Стандартной Библиотеки
- Использование NPM
  - `package.json`
  - `scripts`

> **Создание NPM пакета для показа дерева**  
> Написать функцию для показа древовидной структуры  
> Пример данных

```json
{
  "name": 1,
  "items": [{
    "name": 2,
    "items": [{ "name": 3 }, { "name": 4 }]
  }, {
    "name": 5,
    "items": [{ "name": 6 }]
  }]
}
```

> Пример запуска программы

```bash
npm start
1
├── 2
│   └── 3
│   └── 4
└── 5
    └── 6
```

### `2 (1.2)` Система Модулей Node.js

- Зависимости NPM
- Обзор Шаблона Проектирования Module
  - Классическая Реализация
  - AMD
- CommonJS
- EcmaScript Modules
- Введение в CLI с Node.js
  - `package.json, bin, shebang`

> **CLI утилита для работы с файловой системой**  
> Написать утилиту `tree` для удобного показа структуры файлов директории  
> Утилита должна принимать на вход обязательный аргумент - путь до директории для показа ее структуры. Также она должна понимать опцию глубину показа `--depth, -d` с числом в качестве значения.  
> Пример

```bash
tree Node.js -d 2
Node.js
├── cluster
│   └── index.js
├── domain
│   ├── error.js
│   ├── flow.js
│   └── run.js
├── errors
│   ├── counter.js
│   └── try-catch.js
└── worker
    └── index.js

4 directories, 7 files
```

### `3 (1.3)` Events, Timers, Event Loop

- EventEmitter API
- Using Events
- Event Loop, `libuv` 
- Timers
  - setTimeout, setInverval
  - setImmediate
  - process.nextTick

### `4 (1.4)` Тестирование в Node.js

- Введение в TDD
- Фреймворк Тестирования Jest
  - Обзор
- Tests, Assertions 
  - Setup, Teardown 
  - Asynchronous Code 
  - Mocks, Stubs
  
> **Тестирование приложения `tree`**  
> Конфигация проекта для тестирования утилиты `tree` из предыдущих заданий  
> Добиться code coverage 95%  
> Можно использовать пакет для моков файловой системы

### `5 (1.5)` HTTPS Server

- TCP/IP, Addresses, Ports
  - HTTP(s) Protocols
  - Сертификаты
  - Cookies, Headers & Body
  - HTTP2, HTTP3
- Использование `fs`, `http`
  - Обновление приложения при изменении файлов
  - Инструменты `nodemon`, `concurrently`
  - Пример файлового HTTPs Server 
- Streams API
  - Отправляем файлы через потоки

## Web Server с Express

> Глубоко изучим особенности фреймворка Express. Сделаем полноценное приложение платформу с функционалом REST API, авторизацией и сессиями.
> Будем работать с MongoDB

### `6 (2.1)` Web Servers

- Hello Express!
  - [Express-Generator](http://expressjs.com/en/starter/generator.html)
  - Концепции
  - Request & Response
  - Простой HTML и JSON сервер
  - Сервим ассеты - CSS, JS, Images
  - Введение в Routing
- Обзор Web Servers
  - Express, Koa, Fastify, Restify, Next.js, Loopback, Meteor

### `7 (2.2)`Особенности Express 

- Middlewares
  - Парсеры Body & Cookie
- Шаблонизация
  - Различные Template Engines
  - 404
- Внутренне устройство Express
  - Как сделать web framework на Node.js

> **Создание Express приложения**  
> Генерация сертификатов  
> Выбор шаблона, шаблонизатора  
> Конфигурация проекта

### `8 (2.3)` Введение в MongoDB

- Обзор типов Databases 
  - NoSQL
- MongoDB
  - Стэк MEAN
- Операции CRUD
- Aggregation Фреймворк

### `9 (2.4)` REST API с MongoDB

- Mongoose
- Работаем с моделями
- Routes и Express
  - REST
  - Реализуем GET, POST, PUT, DELETE

> **Создание REST API для управления сущностями приложения**  
> Оживление шаблонов сайта с данными из MongoDB

### `10 (2.5)` Аутентификация и Безопасность

- Аутентификация и авторизация
  - OAuth
  - Библиотека passport
  - Сессии и куки
  - Express Middlewares авторизациионные сервисы 
  - Helmet
- Login & Регистрация
  - Хранение паролей
  - Хэширование, сброс
- JSON Web Tokens
  - Создание Tokens
- Защищенные URLs

> **Авторизация пользователей**  
> Добавление авторизации при доступе к API  
> Добавление методов защиты от попыток авторизации

### `11 (2.6)` Другие Особенности Web Server

- Валидация эндпоинтов
- Отправка и хранение файлов
- Отправка Emails
- Пагинация и фильтры

### `12 (2.7)` Real-Time Web Приложения с сокетами

- Протокол Sockets
  - Web Sockets
- Библиотека Socket.io
  - События, Возможность броадкастинга
  - Каналы
- Создание приложения чата

> **Чат с посетителями сайта**  
> Отправка email пользователю при регистрации

## Node.js на Prod

> Научимся деплоить Node.js приложение в Heroku, правильно обрабатывать ошибки и логи. Рассмотрим особенности отладки и контроля производительности в Node.js

### `13 (3.1)` Отладка и профилирование Node.js

- Ошибки и логи
  - Коды ошибок
- Идентификация запросов
- [Профилирование приложений](https://developer.ibm.com/tutorials/learn-nodejs-debugging-and-profiling-node-applications/##profiling-exercise)
  - Встроенные модули - `async_hooks, perf_hooks, trace_events`

### `14 (3.2)` Node.js в Production

- Процессы, потоки
  - `child_process`, `worker_threads`
- Кластер
- Менеджмент процессов `pm2`
  - Другие инструменты
- Особенности конфигурации на проде
- Пример конфигурации Nginx и Express
- Измерение производительности

> **Подготовка приложения к Production**  
> Использовать `cluster` для распараллеливания запросов  
> Настройка `nginx` и `pm2` для Express сервера

### `15 (3.3)` Деплой приложения

- CI/CD
  - Переменные окружения
  - Gitlab CI/CD
- Heroku
  - MongoDB в облаке
- Мониторинг
  - Prometheus
  - Запросы к логами
- Запускаем Node.js в Docker

> **Настройка деплоя приложения в `Heroku`**

### `16 (3.4)` TypeScript в Node.js

- Ключевые особенности TypeScript
- Практические примеры
- Иснтрументы tsc, tsconfig, DefinitelyTyped
- Конфигурация и сборка проекта

### `17 (3.5)` Express с TypeScript

- Декораторы
- Библиотека Ts.ED
- Мигрируем Node.js на TypeScript
  - Отладка
  
> **Портирование `Express` или `tree` приложения в `TypeScript`**

### `18 (3.6)` CLI в Node.js

- Общие принциры
- Примеры - npm, git
- `package.json`
- Создание CLI на `oclif`
  - Конфигураци проекта
  - Команды, плагины
  - Аргументы и флаги
  - Эффекты

> **Написать CLI для администрирования приложения**  
> CLI должен уметь авторизоваться, содержать команды для просмотра списка, получения и   обновления элементов
  
### `19 (3.7)` Особенности архитектуры V8, WebAssembly, Node.js

- Native Modules
- Особенности WebAssembly
- Заключение
  - Best Practices
  - Мнение Ryan Dahl
  - Deno

## Nest.js, TypeScript, GraphQL, Apollo

> **TypeScript приложение на Nest.js.**  
> Рассмотрим структуру фреймворка Nest.js, язык GraphQL и инструменты Apollo.  
> Создадим CMS приложение с GraphQL API наNest.js

### `20 (4.1)` Начинаем с Nest.js

- Введение
  - Почему Nest.js
  - Hello World
  - Routing
- Nest.js CLI
- Концепции Nest.js
  - Dependency Injection
  - Контроллеры, Провайдеры, Модули
  - Middleware

> **Создание API на Nest.js**

### `21 (4.2)` Работа с PostgreSQL

- Введение в PostgreSQL
- ORM Sequelize с Nest.js
- Реализация CRUD

### `22 (4.3)` Особенности Nest.js

- Pipes и Guards
  - Валидация
- Interceptors
  - Специальные декораторы
- Аутентификация

> **Настройка базы данных с PostgreSQL**  
> Добавление ORM, аутентификации запросов

### `23 (4.4)` Введение в GraphQL

- Почему GraphQL?
- Введение и Обзор GraphQL
  - Сравнение с REST
  - Преимущества и недостатки
  - Schemas, Queries
  - Пример Github REST & GraphQL API
- Создаем проект
  - Конфигурация GraphQL и Nest.js проекта
- Инструменты
  - `server, client` 
  - `graphql`, `graphql-tools`, `graphql-compose`, `prisma`

### `24 (4.5)` Особенности GraphQL

- Queries
  - Fields, Aliases
  - Variables, Directives
  - Subscriptions
  - Обновление данных с Mutations
- Schemas и Типы
  - Типы, язык типов
- Конфигурация проекта
  - Validation & Execution

### `25 (4.6)` Создание GraphQL API Сервера

- Введение в Apollo Server
– Создание GraphQL APIs с Nest.js
  - Определение схем
  - Конфигурация Prisma
  - Конфигурация Apollo Server с Express и MongoDB

> **Настройка приложения и вывод данных**

### `26 (4.7)` Apollo Client

- Конфигурация Apollo Client
  - Queries с клиента
- Тестирование
  - Assertions

### `27 (4.8)` GraphQL в проде

- Деплой в прод
  - Создание и деплой Prisma сервиса
- CI/CD
  - Github Actions
  - Travis CI
- Заключение

> **Настройка деплоя приложения в Heroku**

## Links

- [Rules for homeworks](./rules.md)
- [Join us in Slack](./slack.md)
- [Library](./books.md)

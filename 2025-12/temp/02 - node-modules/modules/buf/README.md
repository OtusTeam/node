# node-modules
Node modules

// Package + dependencies + package manager
// Как организованы модули в NodeJS(CommonJS, ESModules)

// package.json

// dependencies и devDependencies
// dependencies - это зависимости
// нужные для работы проекта.
// Например, react, angular, express

// devDependencies
// то что помогает разрабатывать
// сборщики - webpack.
// линтеры, библиотеки для тестирования
// (jest)

// src -> dist. dist - это конечная цель.
// Я создал пакет

// npm install и npm ci. Чем отличается?

// ci - clean install.
// Может удалить node_modules.
// npm ci работает package-lock.json

// npm init
// express 4.18.1
// x.y.z - server. Семантическое версионирование
// z - patch. Уровень багфиксов.
// y - minor. Улучшения функционала.
// x - major. Что-то глобально изменилось в нашем продукт. Хорошим тоном иметь обратную совместимость.

/*
14, 16, 18 - LTS
15, 17, 19 - 
*/

// npm init - инциализировать проект
// npm install, npm i - установить.
// npm install -g - можно установить глобальный пакет. react-cli, vue-cli, typescript, yarn - его устанавливают как зависимостью.
// npm install --save-dev - devDeps

// npm outdated
// npm update
// ncu

// peerDependencies
// react 18 версия последняя.
// react-good-package - 16 и 18.
// peerDependencies - какие версии других библиотек можно использовать
// с моим пакетом
// bundleDependencies - в виде архивает.

// workspaces.

// Все используют тайпскрипт
// packages/A/package.json
// packages/B/package.json /node_modules для уникальныйх
// packages/C/package.json
// Общий node_modules
// plug in play - попытка заменить node_modules.

// yarn - отличается cli
// npm install -> yarn add
// pnpm постарались cli одинаковое.
// Работает чуть быстрее чем yarn. workspaces.
// lerna
// turborepo - 

// Своих приватных registry для кода.
// Свои registiry - проксируют и кэшируют пакеты.
// Свои пакеты там создавать.
// @my-company/web-server


// Модули


// Javascript и NodeJS, другие языки.

// 1. dependencies от devDependencies?
// 2. Как мне нужно установить зависимости, чтобы установились только пакеты из dependencies?
// npm i --production

dependencies и devDependencies - это зависимости
// deps - это для работы приложения(веб-сервер и т.д.)
// devDeps - это для разработки приложения(тесты, линтер, билдер и т.д.)
// npm install express - установить dependencies
// npm install jest --save-dev - установить devDependencies

// 3. Чем отличается npm i от npm ci (clean-install)
// Когда делаем npm ci он игнорирует package.json

// 4. Какие ещё есть?
// peer dependencies
// Берем логгер pino и хотим интегрироваться с 
// каким-то сервисов?
// sentry - эта система отображения логов и нотификация

<!-- 
"peerDependencies": {
    "@sentry/node": "^7.0.0",
    "pino": "^7.0.0 || ^8.0.0" // 6 и не ниже не будет работать
  },
 -->

// x.y.z
// x - major
// y - minor
// z - patch

// У нас есть два пакета и один пакет требует версию express - 3.0.0, а второй - 4.0.0

// Пакетные менеджеры
// yarn
// pnpm

// 1. Скорость. yarn и pnpm - быстрее. pnpm чуть быстрее.
// 2. Workspaces. yarn и pnpm - для моно репозиториев
// 3. Плюшки. yarn 2 pnp - plug and play. .pnp файл
// Никто не хранит node_modules в git.
// yarn cache
// pnpm почему мне нравится?
// 1. Он похож на npm
// npm install => yarn add
// 2. Он чуть быстрее
// 3. Он чуть кайфовее
// 4. Я люблю моно репы.



// В чем суть паттерна и зачем он нужен?
// 1. Изолированность.
// 2. tree shaking.
// 3. Архитектурно разделить код(декомпозиция).
// 4. Мы можем явно прописать зависимости

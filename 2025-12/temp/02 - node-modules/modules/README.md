# node-modules

1. package.json что это за файл?
2. Какие зависимости вы знаете?
- dependencies: в целом
- devDependencies: для разработки приложения.
3. package-lock.json что это за файл? Глубокое дерево зависимостей.
4. npm install от npm ci чем отличается?
npm ci использует package-lock.json файл.

Чтобы уставовить зависимость исползуем npm install(или npm i)

Что происходит, когда запускаем npm install <package>:
registry - сервер с пакетами.

nodejs - сама платформа + npm - node package manager.

// react библиотека
// react-router
// react-redux

// sentry что это? // одна из систем мониторинга

// 1 цель это веб-сервер. // он не нужен playwright(не устанвливаем)
// 2 цель это веб-скраппер. // playwright(устанваливаем)

yarn и pnpm workspaces
1 репозиторий и множество пакетов.

pnpm + turbo


// Паттерн модуль. Зачем он?
// ООП
// Инкапсуляция.

// commonjs
// Подключаем модуль
require('express')
// module.exports = {
  
}


есть вопрос. Бывает встречается при npm ci консоль жалуется на то, что package.json и package-lock.json не синхронизированы

// Циклическая зависимость быстрый поиск.


























3. Как видно и слышно? Поставьте +, если все хорошо.

4. Чем отличается npm install от npm ci и от npm install --production?
- CI - это clean install.

Я скачал проект и хочу с ним поработать, какой вариант использовать?

Когда мы разрабатываем используем npm install или npm i.
- устанавливем все зависимости(dependencies и devDependencies).

Используй жесткие зависимости из package-lock.json, то используй npm ci.

Один из вариантов более безопастного + чуть быстрее способа установить зависимости
для среды запуска.

Есть dependencies и devDependencies:
- Есть зависимости для сборки/сапорта/тесты/линтеры - зависимости для разработки(devDependencies)
- Есть зависимости для runtime без которых наше приложение не запустится(dependencies)

npm install --production - она не устанавливает devDependencies.

npm i jest --save-dev - добавляет в devDependencies

Какие виды есть?
dependencies
devDependencies
peerDependancies - мы пишем плагин, у нас есть main package(react, angular, vue, express, jquery и т.д.) и хотим указать с какими версиями нам разрешено работать.

Есть React 18.x.x
React router. v6.x.x React 1.x.x не работает.
React redux.
Mobx
и т.д.

Sentry - сборщик логов.

Есть два пакета, они используют minimist разных версий 0.1 и 1.1, как они будут лежать в node_modules

node_modules - все завимости(и зависимости зависимостей) в плоском виде(в корне node_modules)

Express нужна версия minimist 0.0.8

Пакетные менеджеры:

npm - дефолтный

yarn - отличное от npm cli
pnpm 

Workspaces: много проектов внутри репо, у каждого свой package.json
Зависимости - везде eslint, typescript и т.д.

lerna, turbo - они позволяют такими монорепами управлять.

// Паттерн module что это и зачем нужен?

- декомпозиция кода.
- для изолированности и создания namespace
- дерево зависимостей
- tree shaking: может брать куски/нужные функции.

<!-- <script src="./index.js">
  const variable = 1 - window namespace
</script>
<script src="./submodule/index.js">
  const variable = 100 - window namespace
</script>
В чем проблема?
- нет зависимостей.
- нет изолированности(namespace) -->

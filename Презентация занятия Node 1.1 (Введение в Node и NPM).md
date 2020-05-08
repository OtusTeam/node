.center.icon[![otus main](assets/otus-1.png)]

---

background-image: url(assets/title.svg)

# Разработчик Node.js
## Введение в Node.js и NPM
### Александр Коржиков

---

class: top white
background-image: url(assets/sound.svg)
.top.icon[![otus main](assets/otus-2.png)]

.sound-top[
  # Как меня слышно и видно?
]

.sound-bottom[
  ## > Напишите в чат
  ### **+** если все хорошо
  ### **–** если есть проблемы cо звуком или с видео
]

---

# Цели занятия

- Познакомиться с преподавателями и программой курса, понимать как она построена
- Запускать приложения на платформе `Node`
- Работать с пакетным менеджером `NPM`
- Управлять зависимостями и автоматизировать задачи с помощью `package.json`

---

# Вопрос

- Расскажите о себе 😀 , можно в [слаке](https://join.slack.com/t/otus-js/shared_invite/enQtMjc5ODE0NDA0ODE3LTA4NTJjYzNlOWI5ZDNmMGNkZjRmNGNiNzM2NjhlMzc2MjYxY2IzZDVlMjY0YjJhZTNlZjRiNTcwNmRjYzZjYzk
)

  - Кто Вы?
  - Какой Ваш опыт в программировании?
  - Какие `Node.js` фреймворки и библиотеки Вы используете? 
  - Что Вы ждете от курса?
  
.green[
## Для отправки сообщений в Zoom используйте
]
.red[
## **All panelists and attendees**
## **Ведущие и участники**
]

---

# Technologies

### 1. Особенности Node.js

> Обзор особенностей, возможностей и инфраструктуры Node.js, а также системы модулей

### 2. Web Server с Express

> Глубоко изучим особенности фреймворка Express. Сделаем полноценное приложение-платформу с функционалом REST API, авторизацией и сессиями. Будем работать с MongoDB

### 3. Node.js на Prod

> Научимся деплоить Node.js-приложение в Heroku, правильно обрабатывать ошибки и логи. Рассмотрим особенности отладки и контроля производительности в Node.js

### 4. Nest.js, TypeScript, GraphQL, Apollo

> TypeScript-приложение на Nest.js.
Рассмотрим структуру фреймворка Nest.js, язык GraphQL и инструменты Apollo.
Создадим CMS-приложение с GraphQL API на Nest.js

---

# Цели курса

- разрабатывать бэкенд на `Node.js` с использованием `Express, Passport, Jest, GraphQL, Nest.js`
- понимание архитектуры и дизайна `Node.js`, `V8`
- работать с базами данных `MongoDB` и `PostgreSQL`
- практические навыки создания `GraphQl`-сервера с `Apollo`
- использовать и настраивать `CI/CD` для своего проекта
- навыки разработки с `TDD`
- писать понятный и чистый код на `TypeScript`
- опыт создания `Real-time` и `CLI`-приложений

---

# Организационные вопросы по курсу

- Тема Node.js
- 27 + 3 занятия / 1.5 часа / вторник / пятница
- Вебинары, материалы, теория и практика
- Домашние задания
- Выпускной проект
- Общение в slack

---

# Преподаватели+

- **Александр Коржиков**

JavaScript @ Alpari, Comindware, Tinkoff, Backbase, ING  
korzio@gmail.com https://github.com/korzio
  
- **Юрий Дворжецкий**

Java, JavaScript @ Luxoft  
Teaching @ 1500+ hours, 600+ developers

---

## Программа курса 
## Q&A

---

# [Несколько вопросов](https://github.com/denysdovhan/wtfjs)

- `setTimeout` и `setInterval` - часть `JavaScript`?

- ?

```js
console.log.call.call.call.call.call.apply(
  a => a, 
  'what is gonna be printed in the console?'.split(' ')
) 
```

<!-- call(fn, args) -->

- "b" + "a" + +"a" ?

<!-- - typeof document.all? -->

```js
function anc(){
<!-- valid comment too
  return 1
}

anc()
```

---

# Содержание

- Node
  - About
  - Пример Web сервера
.right-image[![Node](assets/node.png)]
  - Структура
  - Стандартные модули
  - Примеры Callbacks

![NPM](assets/npm.png)  

- Пакетный менеджер `npm`
  - Возможности `package.json`
  - CLI

---

# Node

### Асинхронная среда исполнения `JavaScript`, основанная на событийной модели, для создания эффективных сетевых приложений

#### Пример web сервера

```javascript
const http = require('http') 
const hostname = '127.0.0.1'
const port = 3000
const server = http.createServer((req, res) => {
  res.statusCode = 200 
  res.setHeader('Content-Type', 'text/plain') 
  res.end('Hello World\n')
}) 

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

```bash
node server.js
```

- Какие особенности Вы бы отметили из этого примера?

---

# Особенности

- Исполнение `JavaScript` файлов с помощью комманды node 
  
  - REPL

- `CommonJS` формат модулей для загрузки зависимостей
  
  - `ES Modules`

.right-image[
  ![v8](assets/icons/trim/node.png)
]

- Стандартная библиотека модулей

- API основанное на асинхронном паттерне Callbacks

- [`ES2015` синтаксис](http://node.green/)

- Демо (VSCode + [Chrome Debug](chrome://inspect))

.hidden[
  node --inspect-brk simple.js
]

---

# История

.right-image[
  ![v8](assets/icons/trim/v8.png)
]

- *Server side `JavaScript` Platform* - Ryan Dahl, 2009

- Asyncronous (non-blocking) I/O

- Chromium `JavaScript` Engine -> V8

- **Node.js** Foundation

---

# Структура

- Библиотека написана на `C++` и `JavaScript` 

- `V8` - платформа исполнения `JavaScript` от Google (Chromium, Chrome, Opera, Brave, Yandex Browser)

- Event Loop - асинхронный событийный цикл с `libuv`

- Модули для работы с операционной системой

.right-image[
  ![node](assets/icons/trim/node.png)
]

### Patterns

- Callback
- Observer
- Module
- Reactor

---

# Задача

Установить node и npm
https://nodejs.org/en/download/

```bash
node --version
npm --version
```

Создать и запустить `server.js`

```
echo "console.log(process.argv)" > server.js
```

```bash
node server hello world
```

### Лучше использовать [`Node Version Manager (nvm)`](https://github.com/nvm-sh/nvm)

---

# Вопрос

### А Вы знаете какие модули включены в стандартный дистрибутив `Node`?

<br>

.center[
  ![question](assets/question.png)
]

---

# Стандартные модули

.right-code[
- **Protocols**
  - http(s)
  - net
  - dns
- **System**
  - os
  - v8
  - async_hooks 
  - perf_hooks
  - trace_events
]
- **Main**
  - fs
  - timers
  - streams  
- **Utilities**
  - path
  - util
  - zlib
  - crypto
- **Processes**
  - child_process
  - cluster
  - worker_threads

---

# Utilities

```
const querystring = require('querystring')

querystring.parse(`q=shell+ls+regex&
rlz=1C5CHFA_enNL772ED772&
oq=shell+ls+by+reg&
aqs=chrome.1.63i27j0a4.4221e0b9&
sourceid=chrome&ie=UTF-8
`)

{
  "q": "shell ls regex",
  "rlz": "1C5CHFA_enNL772ED772",
  "oq": "shell ls by reg",
  "aqs": "chrome.1.63i27j0a4.4221e0b9",
  "sourceid": "chrome",
  "ie": "UTF-8"
}
```

- querystring

---

# Utilities

```
const path = require('path')

path.join('/Users', 'alex', 'Sites')
// =>
'/Users/alex/Sites'

path.parse('/home/user/dir/file.txt')

{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
```

- querystring
- path

---

# Utilities

```javascript
const url = require('url')
url.parse('https://github.com/korzio')

// Url 
{
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'github.com',
  port: null,
  hostname: 'github.com',
  hash: null,
  search: null,
  query: null,
  pathname: '/korzio',
  path: '/korzio',
  href: 'https://github.com/korzio' 
}
```

- querystring
- path
- url

---

# Utilities

```javascript
const util = require('util')
const assert = require('assert')

util.types.isDate(value)
// or deprecated
util.isDate(value)
// or inherit
util.inherits(MyStream, EventEmitter)

assert.equal(1, 1)
assert.deepEqual({ a: 1 }, { a: 1 })
```

- querystring
- path
- url
- util
- assert

---

# Callbacks

Функция, переданная в качестве аргумента коду, который предполагает исполнить его в какой-то момент времени. Исполнение может быть **синхронным** или **асинхронным**.

```javascript
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
```

В `Node` по умолчанию **callback** выполняется с "ошибкой" и результатом `асинхронно`

```
fs.readFile('/etc/passwd', (err, data) => {
  if (err) throw err
  console.log(data)
})
```

---

# Задача

Создать простой веб сервер

```js
const http = require('http') 
const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'text/plain')
  res.end('Hello World\n')
})
```

Прочитать локальный `html` файл

```js
const fs = require('fs')
fs.readFile('./index.html', (err, text) => {
  console.log(text)
})
```

Отдать с сервера `html` и показать корректно для браузера

---

# Callback Types

#### Только ошибки

```
fs.access('/etc/passwd', fs.constants.R_OK, (err) => {
  console.log(err ? 'no access!' : 'read')
})
```

#### `Node` поддерживает `Promises`

```
util.promisify()
fs.promises.*
```

#### Тип возвращаемого значения

```
http.request('https://example.com', (error, response, body) => {
  ...
})
``` 

---

# Question

- Какие примеры `callback` паттерна в `JavaScript` Вы знаете?
- Вы знакомы с `promisify` функционалом?
- Есть ли разница между `Promise` и `Callback` паттернами?

<br>

.center[
  ![question](assets/question.png)
]


---

# Anti-Pattern - http://callbackhell.com/

```
fs.readdir(source, function (err, files) {
  if (err) {
    console.log('Error finding files: ' + err)
  } else {
    files.forEach(function (filename, fileIndex) {
      console.log(filename)
      gm(source + filename).size(function (err, values) {
        if (err) {
          console.log('Error identifying file size: ' + err)
        } else {
          console.log(filename + ' : ' + values)
          aspect = (values.width / values.height)
          widths.forEach(function (width, widthIndex) {
            height = Math.round(width / aspect)
            console.log('resizing ' + filename + 'to ' + height + 'x' + height)
            this.resize(width, height).write(dest + 'w' + width + '_' + filename, function(err) {
              if (err) console.log('Error writing file: ' + err)
            })
          }.bind(this))
        }
      })
    })
  }
})
```

---

# Globals

.right-image[
  ![node](assets/icons/trim/node.png)
]

- `global` объект - аналог `window`

- объекты `JavaScript`

- *timeouts* почти как в браузере

- `console` 

- `process` репрезентация текущего процесса

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# Node Q&A

---

# NPM

### Package Manager for JavaScript

![NPM](assets/icons/trim/npm.png)

- CI

```bash
npm --version
```

- Registry

```bash
npm i
```

- Website https://npmjs.com/ 

---

# В числах


.right-image[
  ![npm downloads](assets/npm_downloads.png)  
]

### Всего зарегистрировано 1,245,404 пакетов

### Скачиваний

- за неделю - 19,353,318,186
- за месяц - 77,783,269,991
- `react` - 8,189,614
- `djv` - 21,991

### **Node** 2017

25,000,000

.right-code[
  ![NPM](assets/icons/trim/npm.png)
]

### *Звезд во Вселенной*

1,000,000,000,000,000,000,000 

---

# package.json

```
{
  "name": "package",
  "description": "",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/.../package.git"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/.../issues"
  },
  "homepage": "https://github.com/.../package"
}
```

---

# Semantic Versioning

- Спецификация 
https://semver.org/ 

- Калькулятор
https://semver.npmjs.com/ 

```bash
npm install semver
```

| Status | Stage | Version |
|:---|:---|:---|
| First release | New product | 1.0.0 |
| Bug fix | patch | 1.0.1 |
| New Feature | minor | 1.1.1 |
| Breaking change | major | 2.0.0 |

***

- Какие альтернативные нотации версионирования Вы знаете?

---

# CLI

.right-code[![NPM](assets/npm.png)]

- Основные
  - init
  - install
  - start 
  - test
  - run
  
  
- Дополнительные
  - ci 
  - npx 

---

# Самостоятельная работа

Создать новый `npm` пакет

```bash
mkdir ... && cd ... 
npm init # read & answer
```

Сохранить зависимость

```bash
npm install --save-dev ... 
# copy & paste package.json > chat
```

Запустить скрипты

```bash
echo "" > server.js # create file
npm start
npm test # npm run test
```

---

# Зависимости

.right-code[
```
  "dependencies": {
    "commander": "^2.7.1",
    "lodash.get": "^4.0.0",
    "lodash.isequal": "^4.0.0",
    "validator": "^9.0.0"
  },
  "devDependencies": {
    "coveralls": "^3.0.0",
    "grunt": "^1.0.1",
    "grunt-browserify": "^5.2.0",
    "grunt-cli": "^1.2.0",
    "grunt-contrib-copy": "^1.0.0",
    "grunt-jscs": "^3.0.1",
    "grunt-lineending": "^1.0.0",
    "jasmine-node": "^1.14.5",
    "jasmine-reporters": "^2.2.1",
    "remapify": "^2.1.0"
  }
```
]

- `dependencies`
  - `devDependencies` разработчика
  
- `--global`
- `node_modules`

.hidden[
  Another great way to speed up installation time is to include all production dependencies in the published module. We can tell npm to bundle them with our module by adding them as bundleDependencies to our package.json:
  "bundleDependencies": [
    "config-chain",
    "nopt",
    "npmlog",
    "opener",
    "osenv",
    "request"
  ],
  Bundling the dependencies reduces the installation time a lot, as we omit all the small HTTP requests for each dependency and their dependencies during installation. With the current npm, installation time is reduced from 20 seconds to 5 seconds for a broadband connection. Bundling the dependencies also makes sure that our package is still installable even if a module was unpublished.
  When we now run npm publish, we will publish a highly optimized version of our package.
  
  https://learning.oreilly.com/library/view/the-cli-book/9781484231777/A456043_1_En_3_Chapter.html
]

---

class: white
background-image: url(assets/title.svg)
.top.icon[![otus main](assets/otus-2.png)]

# NPM Q&A

---

# Docs

### Node core concepts

- https://nodejs.org/api/

- https://nodejs.org/en/docs/guides/ 

### package manager for javascript

![NPM](assets/npm.png)

- https://docs.npmjs.com/

---

# На занятии

- Познакомились с преподавателем и с программой курса
- Запускать приложения на платформе `Node.js`
- Использовать `NPM` для создания, добавления зависимостей и использования скриптов

---

# Самостоятельные работы

- https://github.com/
- single repo lastname-name(-otus) - `korzhikov-alex-otus`
- `master` branch
- MR from `block-lesson-number` to `master` (`javascript-1` -> `master`, `react-4` -> `master`)
- exclude `node_modules`, `bower_components`, `editor`, scaffolding
- https://github.com/korzio/modern_javascript_frameworks
- Добавить ссылку на MR в чат с преподавателем внутри ЛК Отуса

---

# Самостоятельная работа

> **Создание NPM пакета для показа дерева**  
> Написать функцию для показа древовидной структуры  

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

---

background-image: url(assets/title.svg)
# Спасибо за внимание!
## Пожалуйста, пройдите [**опрос**](https://otus.ru/polls/9701/)
## в личном кабинете

- Все ли темы были понятны? (да - нет)
- Легкий материал или нет? (1 просто - 10 сложно)

---

# TODO

From Владимир Чагин to Me: (Privately) (07:17 PM)
> подскажите, пожалуйста, а как попасть в слак по node.js?
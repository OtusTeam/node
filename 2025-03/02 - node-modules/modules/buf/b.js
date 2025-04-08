export default {
  async bName() {
    const aModule = await import('./a.js')
    
    return `bName-${aModule.aName}`
  }
}






















// index.js <- a.js <- b.js <- a.js

/*

require('./test')

// const testSlow = require('./test-slow')

  // testSlow.init()
{ foo: [Function (anonymous)], name: 'Wang' } // exports

// module
Module {
  id: '/home/nik/projects/webinar/node-modules/test.js',
  path: '/home/nik/projects/webinar/node-modules',
  exports: { foo: [Function (anonymous)], name: 'Wang' },
  filename: '/home/nik/projects/webinar/node-modules/test.js',
  loaded: false,
  children: [],
  paths: [
    '/home/nik/projects/webinar/node-modules/node_modules',
    '/home/nik/projects/webinar/node_modules',
    '/home/nik/projects/node_modules',
    '/home/nik/node_modules',
    '/home/node_modules',
    '/node_modules'
  ]
}
*/

/*

const myModule = require('./my-module')

myModule.myFunction()

const myModuleNew = require('./my-module')

myModuleNew.myFunction = () => {
  console.log('hello nik')
}

myModule.myFunction()

// console.log(require.cache)


const myModule = require('./my-module')

myModule.name = 'new nik'

myModule.myFunction()

const myModule2 = require('./my-module')

myModule2.myFunction = () => {
  console.log('hello nik')
}

console.log(myModule2.name)
myModule2.myFunction()

*/

// const myModule = require('./my-module')
// const myModuleId = require.resolve('./my-module')

// delete require.cache[myModuleId]

// require('./my-module')

// 1 шаг - это из ./my-module получить абсолютный путь
// 2 шаг - а есть ли кэш?
// 3 шаг - если нет кэша, то создать, иначе взять из кэша.

// import - через require
// export - через exports или module.exports


// console.log(exports, require, module, __filename, __dirname)
// require('./test-slow')


// Если папка, то ишет index.js
// Если файл, то ишет файлы с расширение .js, .json, .node

/*
{
    id: '/home/nik/projects/webinar/node-modules/my-module/index.js',
    path: '/home/nik/projects/webinar/node-modules/my-module',
    exports: { name: 'nik' },
    filename: '/home/nik/projects/webinar/node-modules/my-module/index.js',
    loaded: true,
    children: [],
    paths: [
      '/home/nik/projects/webinar/node-modules/my-module/node_modules',
      '/home/nik/projects/webinar/node-modules/node_modules',
      '/home/nik/projects/webinar/node_modules',
      '/home/nik/projects/node_modules',
      '/home/nik/node_modules',
      '/home/node_modules',
      '/node_modules'
    ]
  }

*/

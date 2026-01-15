const express = require('express')
const {Worker} = require("worker_threads")
const { spawn } = require('node:child_process');
const crypto = require('node:crypto');
const data = require('./data')

const PORT = process.env.PORT || 4000

function server() {
  const app = express()

  app.get('/fast', (req, res) => {
    return res.status(200).send(data.user)
  })

  app.get('/slow', async (req, res) => {
    const likes = concatLikes(data.users)
    return res.status(200).send({ likes })
  })

  // async function delay() {
  //   return new Promise((res, rej) => {
  //     setTimeout(res, 1600)
  //   })
  // }

  app.get('/slow-thread', (req, res) => {
    // console.time('slow-thread');

    const worker = new Worker("./src/worker.js", {
      workerData: {
        users: data.users
      }
    });

    //Listen for a message from worker
    worker.once("message", likes => {
      res.status(200).send({ likes });

      // console.timeEnd('slow-thread');
    });

    worker.on("error", error => {
      console.log(error);

      res.status(500).send({ error })
    });

    worker.on("exit", exitCode => {
      console.log(exitCode);
    });
  })

  app.get('/crypto', async (req, res) => {
    crypto.pbkdf2('secret', 'salt', 100000, 64, 'sha512', (err, derivedKey) => {
      if (err) throw err;
      res.send('Heavy computation done!');
    });
  });

  app.listen(PORT, (err) => {
    if (!err) {
      console.log(`Server started on ${PORT} port`)
    }
  })

  function concatLikes(users) {
    return users.reduce((res, user) => {
      res = res.concat(user.like) // concat или [...res, ...user.like]
      
      return res
    }, [])
  }
}

if (module.parent) {
  module.exports = server
} else {
  server()
}


// import Piscina from '../../..';
// import { isMainThread } from 'worker_threads';

// interface Inputs {
//   a : number;
//   b : number;
// }

// isMainThread - это родитель или ребенок?
// При первом запуске isMainThread = true
// При запуске задачи isMainThread = false

// if (isMainThread) {
//   const piscina = new Piscina({ filename: __filename });

//   (async function () {
//     const task : Inputs = { a: 1, b: 2 };
//     console.log(await piscina.run(task));
//   })();
// } else {
//   module.exports = ({ a, b } : Inputs) : number => {
//     return a + b;
//   };
// }

// Процессы и потоки?
// процесс === программы. fork - это точную копию нашего процесса.
// поток - это легковестное ответвление от программы. Память общая.
// можем обращаться к общей памяти.

// Взаимодейсвтие по сети(Unix сокету) 

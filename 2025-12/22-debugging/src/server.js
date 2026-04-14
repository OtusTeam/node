import { randomInt } from 'crypto'
import express from 'express'
import process from 'process'

import data from './data.js'
import mem from './mem.js'

const PORT = process.env.PORT || 4001


class CustomError extends Error {

}


class ValidationError extends Error {

}

const customError = new CustomError();
const validationError = new ValidationError();
const error = new Error();

console.log('customError - Is custom error', customError instanceof CustomError);
console.log('validationError - Is validation error', validationError instanceof ValidationError);
console.log('error = Is custom error', error instanceof CustomError);

const app = express()

app.get('/fast', (req, res) => {
  let test = 'test';

  console.log('before', test);

  debugger;

  test = 'new test';

  console.log('after', test);


  return res.status(200).send(data.user)
})

app.get('/slow', (req, res) => {
  console.time('slow')

  const likes = concatLikes(data.users)
  console.log(likes);

  console.timeEnd('slow');

  return res.status(200).send({ likes })
})

// new Error();

// return { error: null, res } // { error: message };

// [err, res]

// Берете 1 инстанс и просите запустить его с флагом --inspect
// просите открыть порт 9229

// setInterval(() => {
//   console.log('interval');
//   mem.show();
// }, 10000)

let arr = [];

app.get('/big-reverse', (req, res) => {
  mem.show();

  arr = [...arr, ...Array(1e7).fill("some string")];
  console.log(arr.length);
  arr.reverse();

  mem.show();

  return res.status(200).send({ success: true })
})

app.get('/slow-async', async (req, res) => {
  const data = await slowRequest();

  syncWait(1000);

  return res.status(200).send(data);
})

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started on ${PORT} port`)
  }
})

function concatLikes(users) {
  return users.reduce((res, user) => {
    res = res.concat(user.like) // concat медленее push, потому что создает новый массив.

    return res
  }, [])
}

async function slowRequest() {
  const asyncDelay = randomInt(2000, 5000)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true, asyncDelay });
    }, asyncDelay)
  });
}
const syncWait = ms => {
  const end = Date.now() + ms
  while (Date.now() < end) continue
}

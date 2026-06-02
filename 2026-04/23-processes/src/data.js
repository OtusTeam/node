const range = require('lodash.range');

const USERS_COUNT = 10000 // 50 тысяч юзеров

const user = {
  name: 'Nik',
  email: 'nik@mail.com',
  like: 10
}

const users = range(USERS_COUNT).reduce((res, users) => {
  res.push(user)

  return res
}, [])

module.exports = {
  user,
  users
}

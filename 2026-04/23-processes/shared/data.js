const range = require('lodash.range');

const USERS_COUNT = 10_000;

const user = {
  name: 'Nik',
  email: 'nik@mail.com',
  like: 10,
};

const users = range(USERS_COUNT).map(() => user);

module.exports = {
  user,
  users,
};

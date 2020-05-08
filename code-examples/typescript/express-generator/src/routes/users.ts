import express from 'express';
var router = express.Router();

interface User {
  name: string,
  id?: string,
  age: number
}

const users: Array<User> = require('../../users.json');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.end(`Users list ${JSON.stringify(users)}`)
});

router.post('/', function(req, res, next) {
  const user: User = req.body;
  res.send(`User ${JSON.stringify(user)} has been added`);
});

module.exports = router;

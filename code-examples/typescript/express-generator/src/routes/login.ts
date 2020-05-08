import express from 'express';
var router = express.Router();
var users = require('../../users.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post('/', function(req, res, next) {
  console.log(req.body)
  
  if (users.find(({ user, password }) => (
    user === req.body.username && password === req.body.password
  ))) {
    req.session.user = req.body.username;
    res.redirect('/');
    return;
  }
  
  res.render('login', { error: 'Not found' });
});

module.exports = router;

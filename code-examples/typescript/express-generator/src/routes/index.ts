import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  req.session.views = (req.session.views || 0) + 1;
  res.render('index', { title: 'Express', views: req.session.views, user: req.session.user });
});

module.exports = router;

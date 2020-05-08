"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var users = require('../../users.json');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('login');
});
router.post('/', function (req, res, next) {
    console.log(req.body);
    if (users.find(function (_a) {
        var user = _a.user, password = _a.password;
        return (user === req.body.username && password === req.body.password);
    })) {
        req.session.user = req.body.username;
        res.redirect('/');
        return;
    }
    res.render('login', { error: 'Not found' });
});
module.exports = router;

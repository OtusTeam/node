"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
    req.session.views = (req.session.views || 0) + 1;
    res.render('index', { title: 'Express', views: req.session.views, user: req.session.user });
});
module.exports = router;

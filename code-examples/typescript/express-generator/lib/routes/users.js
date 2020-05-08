"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
var users = require('../../users.json');
/* GET users listing. */
router.get('/', function (req, res, next) {
    res.end("Users list " + JSON.stringify(users));
});
router.post('/', function (req, res, next) {
    var user = req.body;
    res.send("User " + JSON.stringify(user) + " has been added");
});
module.exports = router;

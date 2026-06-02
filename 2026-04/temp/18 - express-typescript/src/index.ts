import {App} from "./app";
import {HomeController} from "./tgg";
import * as bodyParser from "body-parser";

const app = new App({
    port:3000,
    routes: [new HomeController()],
    middlewares: [bodyParser.json()]
})

app.listen()
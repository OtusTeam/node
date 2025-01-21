import * as express from 'express'
import { Application } from 'express'
import {UserController} from "./controllers/UserController";
import * as bodyParser from "body-parser";

export class App {
    public port: number
    public app: Application

    constructor(initOptions: {
        port: number,
        middlewares: any[],
        routes: any[]
    } ) {
        this.port = initOptions.port
        this.app = express()
        this.initRoutes(initOptions.routes)
        this.initMiddlewares(initOptions.middlewares)
    }

    initRoutes (routes: any[]) {
        routes.forEach(controller=>{
            controller.initRoutes()
            this.app.use(controller.path, controller.router)
        })
    }
    initMiddlewares(middlevares: any[]) {
        middlevares.forEach(middlevare=>{
            this.app.use(middlevare)
        })
    }
    listen(){
        this.app.listen(this.port, ()=>console.log('server started'))
    }
}

const app = new App({
    port: 3000,
    middlewares: [bodyParser.json()],
    routes: [new UserController()]
})
app.listen()
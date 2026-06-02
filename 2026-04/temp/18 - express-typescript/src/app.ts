import * as express from 'express'
import {Application} from "express";
import {BaseController} from "./abstract/BaseController";


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

    initMiddlewares (middlewares: any[]) {
        middlewares .forEach(middleware=>{
            this.app.use(middleware)
        })
    }

    initRoutes (routes: BaseController[]) {
        routes.forEach(controller=>{
            controller.initRoutes()
            this.app.use(controller.path, controller.router)
        })
    }
    listen(){
        this.app.listen(this.port, ()=>{
            console.log('server started')
        })
    }

}
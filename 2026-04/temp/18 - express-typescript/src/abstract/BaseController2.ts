import * as express from "express";
import {RouteConfig} from "./BaseController";

export abstract class BaseController2 {
    public path = '/'
    public router = express.Router()
    public routes: RouteConfig[] = []

    initRoutes() {
        this.routes.forEach(route => {
                this.router[route.method](route.path, route.handler)
            }
        )
    }
}
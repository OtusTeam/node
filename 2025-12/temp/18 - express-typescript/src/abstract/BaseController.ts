import * as express from 'express'
import {Response, Request} from 'express'

export interface RouteConfig {
    path: string
    method: 'get' | 'post'
    handler: (req: Request, res: Response) => void
}

export abstract class BaseController {
    public path = '/'
    public router = express.Router()
    public routes: RouteConfig[] = []

    initRoutes() {
        const constructor: any = this.constructor
        const additionalRoutes: RouteConfig[] = constructor.routes
        additionalRoutes.concat(this.routes).forEach(route => {
                this.router[route.method](route.path, route.handler)
            }
        )

    }
}
import {BaseController, RouteConfig} from "../abstract/BaseController";
import {get, logger, post, RouterController} from "../lib/decorators/HTTPReq";

@RouterController('/home')
export class HomeController extends BaseController{
    public routes: RouteConfig[] = []

    @logger('home')
    @get('/healthCheck')
    healthCheck() {

        return {
            success: true
        }
    }

    @get('/user')
    getUSer() {
        return {
            userID: 1,
            name: 'anzor'
        }
    }
    @post('/')
    setUSer() {
        return {
            userID: 1,
            name: 'anzor bagirokov',
            saved: true
        }
    }
}
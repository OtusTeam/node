import {BaseController2} from "../abstract/BaseController2";
import {RouteConfig} from "../abstract/BaseController";
import {get, RouterController} from "../lib/decorators/HTTPReq";


@RouterController('/user')
export class UserController extends BaseController2 {
    public routes: RouteConfig[] = []

    @get('/healthCheck')
    healthCheck() {
        return {
            success: true
        }
    }
}
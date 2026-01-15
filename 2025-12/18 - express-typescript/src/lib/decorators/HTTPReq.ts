import {Request, Response} from "express";

export function HTTPMethods (method: string){
    return function (path: string){
        return function (target:any, key:any, descriptor:PropertyDescriptor){
            const constructor: any = target.constructor
            if(constructor.routes && constructor.routes.length != 0){
                constructor.routes.push(
                    {
                        path: path,
                        method: method,
                        handler: (req: Request, res: Response)=>{
                            res.send(descriptor.value())
                        }
                    }
                )
            }else{
                constructor.routes = []
                constructor.routes.push(
                    {
                        path: path,
                        method: method,
                        handler: (req: Request, res: Response)=>{
                            res.send(descriptor.value())
                        }
                    }
                )
            }


            return descriptor
        }
    }
}

export const get = HTTPMethods('get')
export const post = HTTPMethods('post')


type IContsructor = {new(...args:any[]):any}
export function RouterController(path:string){
    return function<T extends IContsructor>( constructor: T):T{
        return class extends constructor {

            public path = path
        }
    }
}


export function logger (category:string) {
    return function (target:any, key:any, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value

    }
}

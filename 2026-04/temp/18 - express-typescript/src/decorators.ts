export function logger (category:string) {
    return function (target:any, key:any, descriptor:PropertyDescriptor){
        const originalMethod = descriptor.value

        descriptor.value = function () {
            console.log(Date.now() / 1000 | 0, 'Log event in', category);
            return originalMethod.apply(this, arguments);
        };
        return descriptor;

    }

}


class UserController {

    @logger('UserController')
    getUser(){


    }
}
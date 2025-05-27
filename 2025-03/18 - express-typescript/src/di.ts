import 'reflect-metadata'
import { container, injectable } from 'tsyringe'

class SomeData {
    public vart = 12
}

@injectable()
class A {
    constructor(private a:SomeData){

    }
}
@injectable()
class B {
    constructor(private a:A){

    }
}
@injectable()
class C {
    constructor(private b:B){

    }
}

const c = container.resolve(C)
console.log(c)
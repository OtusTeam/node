
class Logger implements ILog {
    constructor(){

    }
    log() {
        console.log('log data')
    }
    write() {
        console.log('write data')
    }
}
class Logger2 {
    NextLogger = null
    constructor(LoggerInstance: any){
        this.NextLogger = LoggerInstance
    }
    log() {
        console.log('log data')
    }
    write() {
        console.log('write data')
    }

    dream(){

    }

}

abstract class ILog {
    log(){

    }
    write(){

    }
}

interface ILOGF {
    log():void
    write():void
}

class UserClass {
    private classLogger: ILog
    constructor(logger: ILog){
        this.classLogger = logger
    }

    getUserCars(){
        console.log('cars')
        this.classLogger.log()
    }
}


const v = new UserClass(new Logger2())
console.log(v)




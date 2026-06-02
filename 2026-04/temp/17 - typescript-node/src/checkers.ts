import axios, {AxiosInstance} from "axios";

interface ISettings {
    url: string
    html?: string
}

interface IChecker {
    check(settings: ISettings): Promise<boolean>
}

class Check200 implements IChecker {
    private axios: AxiosInstance

    constructor(axiosInstance: AxiosInstance) {
        this.axios = axiosInstance
    }
    async check(settings: ISettings): Promise<boolean> {
        return this.axios.get(settings.url).then(r => {
                return r.status === 200
            }
        ).catch(e => {
            console.log('error', e)
            return false
        })
    }
}

class CheckHTML implements IChecker {
    private logger: Function

    constructor(loggerInstance: Function) {
        this.logger = loggerInstance
    }

    async check(settings: ISettings): Promise<boolean> {
        return axios.get(settings.url).then(r => {
                this.logger('success')
                return r.data.indexOf(settings.html) != -1
            }
        ).catch(e => {
            this.logger('error')
            return false
        })
    }
}

export enum IType {
    check200,
    checkHTML
}
export class CheckersFabric {
    protected static instances:IChecker[] = []
   public static getChecker(type: IType):IChecker {
       if(!this.instances[type]){
           console.log('instance created')
            switch (type){
                case IType.check200:
                    this.instances[type] = new Check200(axios)
                    break
                case IType.checkHTML:
                    this.instances[type] = new CheckHTML((loggedData: string  )=>console.log(loggedData))
                    break
            }
        }
        return this.instances[type]
    }
}

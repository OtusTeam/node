interface Repository {
    name: string,
    routes: [],
    path: boolean
}

type models = 'citiesRepository' | 'carsRepository'

//типизировать функцию чтобы ключами были type models а значениями interface Repository без path

const CitiesModelArray: Record<models,Omit<Repository, 'path'>>  = {
        citiesRepository: {
            name: 'Krasnodar',
            routes: [],
            path: false
        },
        carsRepository: {
            name: 'Krasnodar',
            routes: [],
            path: false
        }
    }

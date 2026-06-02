
interface ICarModel {
    [car:string]: string,
    color: string
}

const CarModel: ICarModel = {
    car: 'bmw',
    color: 'green'
}

interface IFruitsModel {
    banana: number,
    apples: number
}

const FruitsModel: IFruitsModel = {
    banana: 5,
    apples: 2
}

//типизировать функцию

function getCarData<L extends keyof T, T extends Record<any,any>>( thisData: T, key: L ): T[L] {
    return thisData[key];
}

console.log(getCarData(CarModel, 'color'))
console.log(getCarData(FruitsModel, 'banana'))










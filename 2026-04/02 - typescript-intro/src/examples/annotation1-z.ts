//primitives

const isAny: any = 0
const isBoolean = false
const isNumber = 5
const isString = "строка"
const isNull: null = null
const isundefined: undefined = undefined


function sum(a: number, b: number): void {
    console.log(a + b)
}


console.log(
    isAny,
    isBoolean,
    isNumber,
    isString
)

//array
let stringArray: string[] = ['string1', 'string2']
let numberArray: Array<number> = [3, 5, 8]

//tuple
let isTuple: [string, boolean, number] = ['string1', false, 5]

console.log(
    stringArray,
    numberArray,
    isTuple
)
// задание

// const userID
// const isAvailable
// const userIDs = []



type TCities = {
    id: number,
    name: string,
    districts: string[],
    status: string,
    citizens?: number
}
enum Statuses {
    CAPITAL = 'capital',
    NOTCAPITAL = 'nonCapital'
}

function fetchCities(): Array<TCities> {
    return [
        {
            id: 1,
            name: 'Moscow',
            districts: ['ЦАО', 'СВАО', 'САО'],
            status: Statuses.CAPITAL
        },
        {
            id: 1,
            name: 'Krasnodar',
            districts: ['Центральный', 'Западный', 'Уральская'],
            status: Statuses.NOTCAPITAL
        },
        {
            id: 1,
            name: 'Sochi',
            districts: ['Центральный', 'Южный'],
            status: Statuses.NOTCAPITAL
        }
    ]

}


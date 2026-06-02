//functions

let learnTypeScript = (a: string, b: number) => {
    console.log('Эта функция ничего не возвращает!')
}

interface Nums {
    a: number
    b: number
}
let learnTypeScriptObj = ({a,b}: Nums): number => {
    return a + b
}


//неявный возврат значения
let add = (a: number, b: number) => a + b

let addResult = add(10, 20)


//глобальные переменные
let koef: number = 1.5

let addKoef = (a: number) => {
    return a * koef
}

let addKoefResult = addKoef(5)

//необязательные параметры

let getName = (firstName: string, lastName?: string ) => {
    return firstName + ' ' + lastName
}

let name1 = getName('Иван', 'Кузнецов')
// let name2 = getName('Иван', 'Михайлович', 'Кузнецов') //ошибка, много параметров
let name3 = getName('Иван') //ошибка, мало параметров

// let getName = (firstName: string, lastName?: string) => {
//     if (lastName) return firstName + ' ' + lastName
//     else return firstName
// }
//
// let name1 = getName('Иван', 'Кузнецов')
// console.log(name1) // Иван Кузнецов
//
// let name2 = getName('Вася')
// console.log(name2) // Вася


//параметры по умолчанию
let getName3 = (firstName: string = 'anzor', lastName: string = 'Иванов') => firstName + ' ' + lastName

let name12 = getName3('Иван', 'Кузнецов')
console.log(name1) // Иван Кузнецов

let name23 = getName3('Вася')
// console.log(name2) // Вася Иванов


//неопределенный набор параметров

let addNumbers = (firstNumber: number, ...numberArray: number[]): number => {
    let result = firstNumber
    for (let i = 0; i < numberArray.length; i++) {
        result += numberArray[i]
    }

    return result
}

let num1 = addNumbers(3, 7, 8)
console.log(num1) // 18

let num2 = addNumbers(3, 7, 8, 9, 4)
console.log(num2) // 31

// задание

// описать интерфейс автомобиля который имеет следующую функцию
//     function SomeCar(MyCar: ICar){
//         const name = MyCar.name.toLowerCase()
//         const amountOfWheels = MyCar.wheels * 2
//         const isLegal = MyCar.isLegal
//         console.log(name, amountOfWheels, isLegal)
//     }
//


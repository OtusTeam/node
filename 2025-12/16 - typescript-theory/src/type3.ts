//types

type isAlias = string | number | boolean

let isVar: isAlias

isVar = 1

console.log(isVar + ', Тип: ' + typeof isVar)

isVar = false

console.log(isVar + ', Тип: ' + typeof isVar)

isVar = 'Hello'

console.log(isVar + ', Тип: ' + typeof isVar)

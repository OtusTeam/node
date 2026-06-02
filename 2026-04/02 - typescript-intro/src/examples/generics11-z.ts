//generics

function getId<L,K>(id: L):K {
    return id
}


let result1 = getId<number, string>(5)
console.log(result1)


//шаблоны
type Pair<T, U> =
    {
        first: T; second: U
    };

const pair: Pair<number, number> = {
    first: 6, second: 42
};


//задание

// типизировать код ниже

// function fetchCities() {
//     return [
//         {
//             id: 1,
//             name: 'Moscow',
//             districts: ['ЦАО', 'СВАО', 'САО'],
//             status: 'capital'
//         },
//         {
//             id: 1,
//             name: 'Krasnodar',
//             districts: ['Центральный', 'Западный', 'Уральская'],
//             status: 'nonCapital'
//         },
//         {
//             id: 1,
//             name: 'Sochi',
//             districts: ['Центральный', 'Южный'],
//             status: 'nonCapital'
//         }
//     ]
//
// }
//
// const citiesWithCitizens  = fetchCities().map(item=>{
//     const citizens = Math.floor(Math.random() * (1000 - 500) + 500);
//     return {
//         ...item,
//         citizens
//     }
// })

//interfaces

type TFruit = {
    name: string
    sweetness: number,
    bones?: boolean
}

let myFruit: Readonly<TFruit> = {
    name: 'Banana',
    sweetness: 7,
    bones: false,
}

let myFruit2  = {
    name: 'Banana',
    sweetness: 7,
    bones: false,
}

const partial = (myFruitInst: Partial<TFruit>)=>{
    console.log(myFruitInst)
}
partial(myFruit)


const required = (myFruitInst: Required<TFruit>)=>{
    console.log(myFruitInst)
}
required(myFruit2)

type fruits = 'banana' | 'apple'
const record = (myFruitInst: Record<fruits,TFruit>)=>{
    console.log(myFruitInst)
}
record({banana: myFruit2, apple: myFruit2})


type TFruitInterface = {
    name: string
    sweetness: number,
    bones?: boolean
}

type TFruitType = NonNullable<string | number | undefined>

function MyFunc(fruit: TFruitType) {

}




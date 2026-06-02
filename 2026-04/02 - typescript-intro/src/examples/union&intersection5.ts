
//union

let isUnion: string | number | boolean
isUnion = 1
console.log(isUnion + ', Тип: ' + typeof isUnion)

isUnion = false
console.log(isUnion + ', Тип: ' + typeof isUnion)

isUnion = 'Hello'
console.log(isUnion + ', Тип: ' + typeof isUnion)

//intersection

interface Colorful {
    color: string
}
interface Circle {
    radius: number
}

function draw(circle: Colorful & Circle) {
    console.log(`Color was ${circle.color}`)
    console.log(`Radius was ${circle.radius}`)
}

// okay
draw({ color: 'blue', radius: 42 })

// oops
draw({ color: 'red', radius: 42 })

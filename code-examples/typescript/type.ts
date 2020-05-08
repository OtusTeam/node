type Add<X> = (baseValue: X, increment: X) => X

type Fn = (x: number, y: number) => number

const add: Add<number> = function(a, b) { return a + b }
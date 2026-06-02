//контроль инвариантов в операторах switch и if-else

function unknownColor(x: never): never {
    throw new Error("unknown color");
}

type Color = 'red' | 'green' | 'blue' | 'black'

function getColorName(c: Color): string {
    switch(c) {
        case 'red':
            return 'is red';
        case 'green':
            return 'is green';
        case 'blue':
            return 'is blue';
        case 'black':
            return 'is blue';
        default:
            return unknownColor(c); // Аргумент типа 'string' не может быть присвоен параметру типа 'never'
    }
}


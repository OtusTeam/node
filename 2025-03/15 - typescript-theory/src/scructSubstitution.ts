//совместимость типов - структурное подтипирование
type VariantA = {
    a: string,
}

type VariantB = {
    b: number,
}

declare function fn(arg: VariantA | VariantB): void


const input = {a: 'foo', b: 123 }
fn(input) // TypeScript не жалуется, но для нашего случая это должно быть недопустимо


// type VariantA = {
//     a: string
//     b?: never
// }
//
// type VariantB = {
//     b: number
//     a?: never
// }
//
// declare function fn(arg: VariantA | VariantB): void
//
//
// const input = {a: 'foo', b: 123 }
// fn(input) // ❌ Типы свойства 'a' несовместимы

function itself<T>(t: T): T {
  return t
}

const a = itself<string>('abc')
const b = itself("abc")

if (a === b) {
  console.log(123)
}
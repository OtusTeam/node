interface A {
  name: string
  legs: number
  valid: () => boolean
}

interface B {
  valid: () => boolean
}

const a: A & B = {
  name: "",
  legs: 1,
  valid: Boolean
}

const b: A | B = {
  valid: Boolean
}
const test = () => {
    console.time('x')
    console.time('x2')
    setTimeout(() => console.timeEnd("x"), 100)
    setTimeout(() => console.timeEnd("x2"), 1000)
}
test()
// test()
function itself(t) {
    return t;
}
var a = itself('abc');
var b = itself("abc");
if (a === b) {
    console.log(123);
}

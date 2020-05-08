class A {
    constructor() {
        this.list = Array();
    }
    push(a) {
        this.list.push(a);
    }
    pop() {
        return this.list.pop();
    }
    print() {
        this.list.forEach(({ name }) => {
            console.log(name);
        });
    }
}
class MyClass {
}
const lotsOfAs = new A();
lotsOfAs.push({ name: "123" });
lotsOfAs.print();

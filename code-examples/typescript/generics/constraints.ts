interface List<T> {
  push: (T) => void,
  pop: () => T,
}

interface Nameable {
  name: string;
}

class A<T extends Nameable> implements List<T> {
  private list = Array<T>();
  
  push(a: T) {
    this.list.push(a)
  }
  pop() {
    return this.list.pop()
  }
  print(): void {
    this.list.forEach(({ name }: T) => {
      console.log(name)
    })
  }
}

class MyClass {
  public name: string
}

const lotsOfAs = new A<MyClass>()
lotsOfAs.push({ name : "123" })
lotsOfAs.print()
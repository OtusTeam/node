interface List<T> {
  push: (T) => void,
  pop: () => T,
}

class A implements List<number> {
  private list = Array<number>();
  push(a: number) {
    this.list.push(a)
  }
  pop() {
    return this.list.pop()
  }
}

interface Title {
  title: string
}

class B<T extends Title> implements List<T> {
  private list = Array<T>();
  push(b: T) {
    this.list.push(b)
  }
  pop() {
    return this.list.pop()
  }
  print() {
    this.list.forEach(({ title }) => {
      console.log(title)
    })
  }
}

function wrap(b: B<Title>): Title {
  return b.pop()
}
type IBooks = {
    [title: string]: string
    description: string
}
type IAuthor = {
    name: string
    pageSize: number
}



export class Repository<T> {
    elements: T[] = []

    addElement(el: T) {
        this.elements.push(el)
    }

    getElements(): T[] {
        return this.elements
    }

    findElement<K extends keyof T>(key: K, value: T[K]): T | undefined {
        return this.elements.find(el => el[key] === value)
    }

    deleteElement<K extends keyof T>(key: K, value: T[K]): void {
        const index = this.elements.findIndex(el => el[key] === value)
        if (index != -1) {
            this.elements.splice(index, 1)
        }
    }

}


const bookRepository = new Repository<IBooks>()
bookRepository.addElement({
    title: 'tttt',
    description: 'derasd'
})
bookRepository.findElement(
    'tttt',
'dfg'
)
console.log(bookRepository.getElements())


const authorRepository = new Repository<IAuthor>()
authorRepository.addElement({
    name: 'tttt name',
    pageSize: 45
})

console.log(authorRepository.getElements())
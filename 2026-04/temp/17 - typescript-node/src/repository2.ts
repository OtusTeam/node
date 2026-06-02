interface IBook {
    title: string
    description: number
}


interface IAuthor {
    name: string
}

class Repository<T> {
    elements: T[] = []

    addElement(element: T): void {
       this.elements.push(element)
    }

    getElements():T[] {
        return this.elements
    }
    // type BookKey = 'title' | 'description'

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


const booksInstance = new Repository<IBook>()
const authorInstance = new Repository<IAuthor>()


booksInstance.addElement({
    title: 'olaf',
    description: 'olaf live'
})


booksInstance.findElement('title', 'dfgdfgdfg')

console.log(booksInstance.getElements())
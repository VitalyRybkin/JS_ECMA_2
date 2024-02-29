class Student {
    constructor(name, age, grade) {
        this.name = name
        this.age = age
        this.grade = grade
    }

    displayInfo() {
        console.log(`Name: ${this.name}\n Age: ${this.age}\n Grade: ${this.grade}`)
    }
}

class Book {
    constructor(title, author, pages) {
        this.title = title
        this.author = author
        this.pages = pages
    }

    displayInfo() {
        console.log(`Title: ${this.title}\n Age: ${this.author}\n Grade: ${this.pages}`)
    }
}

const student1 = new Student("John Smith", 16, "10th grade")
student1.displayInfo()

const student2 = new Student("Jane Doe", 17, "11th grade")
student2.displayInfo()

const book = new Book("Idiot", "Dostoevsky", "13123")
book.displayInfo()

//book constructor
function Book(title, author, pages, read) {
    if(!new.target){
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function(){
        return `${title} by ${author}, ${pages} pages, ${read ? "read" : "not read yet" }`
    }
}

function addBookToLibrary(title, author, pages, read){
    let tempBook = new Book(title, author, pages, read)

    myLibrary.push(tempBook)
}

let myLibrary = []

//Test objects
/*
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)
const theLotr = new Book("The Lord of the Rings", "J.R.R Tolkien", 450, true)
*/
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false)
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 450, true)
console.log(myLibrary[1])


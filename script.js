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

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)

console.log(theHobbit)
let myLibrary = []
const docBod = document.getElementById("card-container")
const addBtn = document.getElementById("add")

//dialog elements
const bookDialog = document.getElementById("book-dialog")
const submitBtn = document.getElementById("submit-btn")

//form inputs
const titleInput = document.getElementById("title")
const authorInput = document.getElementById("author")
const pagesInput = document.getElementById("pages")
const readInput = document.getElementById("read")

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
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet" }`
    }
}

function addBookToLibrary(title, author, pages, read){
    let tempBook = new Book(title, author, pages, read)

    myLibrary.push(tempBook)
}

//display books on page
function bookDisplay (bookList) {
    bookList.forEach((elem) => {
        let bookCard = document.createElement("div")
        let title = document.createElement("h4")
        let info = document.createElement("p")
        let deleteBtn = document.createElement("button")
        let readBtn = document.createElement("button")

        //add button to remove book from display
        deleteBtn.setAttribute("type", "button")
        deleteBtn.textContent = "Remove from library"
        deleteBtn.addEventListener("click", (event) => {
            const index = bookList.findIndex(book => book.id === elem.id)
            bookCard.remove()
            if(index !== -1){
                bookList.splice(index, 1)
            }
        })

        //add button to change read status
        readBtn.setAttribute("type", "button")
        if( elem.read == true ){
            readBtn.textContent = "Change to unread"
        }
        else if (elem.read == false){
            readBtn.textContent = "Change to read"
        }
        readBtn.addEventListener("click", (event) => {
            if( elem.read == true ){
                elem.read = false
                info.textContent = elem.info()
                readBtn.textContent = "Change to read"
            }
            else if (elem.read == false){
                elem.read = true
                info.textContent = elem.info()
                readBtn.textContent = "Change to unread"
            }
            else {
                console.log("error")
            }
        })

        bookCard.appendChild(title)
        bookCard.appendChild(info)
        bookCard.appendChild(deleteBtn)
        bookCard.appendChild(readBtn)

        title.textContent = elem.title
        info.textContent = elem.info()

        docBod.append(bookCard)
        
    })
}

//display new book form on button click
addBtn.addEventListener("click", (event) => {
    bookDialog.showModal()
})

//actions to add new book to list
submitBtn.addEventListener("click", (event) => {

    //prevent form submission
    event.preventDefault()

    //convert button string value to boolean
    const readValue = document.querySelector('input[name="read"]:checked').value === "true"

    //add new book to library array
    addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readValue)
    
    //remove all books from display
    while(docBod.firstChild) {
        docBod.removeChild(docBod.firstChild)
    }

    //update display with new books
    bookDisplay(myLibrary)

    bookDialog.close()
})






//Test objects
/*
const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)
const theLotr = new Book("The Lord of the Rings", "J.R.R Tolkien", 450, true)
*/
addBookToLibrary("The Hobbit", "J.R.R Tolkien", 295, false)
addBookToLibrary("The Lord of the Rings", "J.R.R Tolkien", 450, true)
bookDisplay(myLibrary)


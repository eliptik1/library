// Classes
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

class Library {
    constructor(){
        this.myBook = [
            {title: "Atomic Habits", author: "James Clear", pages: 320, read: true},
            {title: "Deep Work", author: "Cal Newport", pages: 300, read: true},
            {title: "How To Invent Everything", author: "Ryan North", pages: 464, read: false},
        ]
    }
    displayBooks(){
        container.innerHTML = "" // clear existing book display
        for(let i = 0; i < library.myBook.length; i++){
            let readClass = library.myBook[i].read ? "read" : "";
            let readStatus = library.myBook[i].read ? "Completed" : "On progress";
            container.innerHTML += 
            `<div class="book-card ${readClass}">
                <div class="description">
                    <h2>${library.myBook[i].title}</h2> 
                    <p>${library.myBook[i].author}</p>  
                    <p class="pages">${library.myBook[i].pages} Pages</p>
                </div>
                <div class="card-bottom">
                    <div class="buttons">
                        <button class="readBtn">Read</button> 
                        <button class="removeBtn">Remove</button>
                    </div>
                    <p class="read-status ">Status: ${readStatus}</p>
                </div>
            </div>`
        } 
        let readBtns = document.querySelectorAll(".readBtn")
        readBtns.forEach((btn, index) => {btn.addEventListener("click", () => { 
            library.myBook[index].read = !library.myBook[index].read //Toggle the read status by clicking the button
            library.displayBooks()
            populateStorage()
            })
        })
        let removeBtns = document.querySelectorAll(".removeBtn")
        removeBtns.forEach((btn, index) => {
            btn.addEventListener("click", (el)=> { 
                let parent = el.target.closest(".book-card") //Find the closest element that matches the selector ".book-card" (h1)
                parent.remove();
                library.myBook.splice(index, 1)
                library.displayBooks()
                populateStorage()
            })
        }) 
    }

    addBookToLibrary(){
        let bookName = titleInput.value
        let bookAuthor = authorInput.value
        let bookPages = pagesInput.value
        let isRead = isReadInput.checked
        let book1 = new Book(bookName, bookAuthor, bookPages, isRead)
        library.myBook.push(book1)
        titleInput.value = ""
        authorInput.value = ""
        pagesInput.value = ""
        isReadInput.checked = false
        library.displayBooks()
        populateStorage()
    }
}
const library = new Library()

function modalOn(){
    modal.classList.add("active")
    overlay.classList.add("active")
} 


let addBtn = document.querySelector("#btn-add")
let form = document.querySelector("#book-form")
let container = document.querySelector(".books-container")
let modal = document.querySelector(".modal")
let overlay = document.querySelector("#overlay")
let titleInput = document.getElementById("title")
let titleError = document.querySelector("#title + .error")
let authorInput = document.getElementById("author")
let authorError = document.querySelector("#author + .error")
let pagesInput = document.getElementById("pages")
let pagesError = document.querySelector("#pages + .error")
let isReadInput = document.getElementById("read")

addBtn.addEventListener("click", modalOn)
overlay.addEventListener("click", () => {
    modal.classList.remove("active")
    overlay.classList.remove("active")
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (titleInput.validity.valid && authorInput.validity.valid && pagesInput.validity.valid) {
        library.addBookToLibrary()
        titleError.className = "error"
        titleError.textContent = ""
        authorError.className = "error"
        authorError.textContent = ""
        pagesError.className = "error"
        pagesError.textContent = ""
        modal.classList.remove("active")
        overlay.classList.remove("active")
    } else {
        showError()
    }
})

function showError() {
    if (titleInput.validity.valueMissing) {
        titleError.className = "error active"
        titleError.textContent = "*Book title is required"
    } else {
        titleError.className = "error"
        titleError.textContent = ""
    }
    if (authorInput.validity.valueMissing) {
        authorError.className = "error active"
        authorError.textContent = "*Book title is required"
    } else {
        authorError.className = "error"
        authorError.textContent = ""
    }
    if (pagesInput.validity.valueMissing) {
        pagesError.className = "error active"
        pagesError.textContent = "*Book title is required"
    } else {
        pagesError.className = "error"
        pagesError.textContent = ""
    }
}

//Local Storage
if(!localStorage.getItem("books")) {
    populateStorage();
} else {
    setStyles();
}
function populateStorage() {
    localStorage.setItem('books', JSON.stringify(library.myBook));
    setStyles();
}
function setStyles() {
    let currentBooks = JSON.parse(localStorage.getItem('books'))
    library.myBook = currentBooks;
}

library.displayBooks() //Display the default books in the myBook array when the page loads
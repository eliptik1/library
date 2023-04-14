let myBook = [
    {title: "Atomic Habits", author: "James Clear", pages: 320, read: true},
    {title: "Deep Work", author: "Cal Newport", pages: 300, read: true},
    {title: "How To Invent Everything", author: "Ryan North", pages: 464, read: false},
];

// Constructor function
function Book(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
}

function modalOn(){
    modal.classList.add("active")
    overlay.classList.add("active")
}

function addBookToLibrary(){
    let bookName = titleInput.value
    let bookAuthor = authorInput.value
    let bookPages = pagesInput.value
    let isRead = isReadInput.checked
    let book1 = new Book(bookName, bookAuthor, bookPages, isRead)
    myBook.push(book1)
    titleInput.value = ""
    authorInput.value = ""
    pagesInput.value = ""
    isReadInput.checked = false
    displayBooks()
}

function displayBooks(){
    container.innerHTML = "" // clear existing book display
    for(let i = 0; i < myBook.length; i++){
        let readClass = myBook[i].read ? "read" : "";
        let readStatus = myBook[i].read ? "Completed" : "On progress";
        container.innerHTML += 
        `<div class="book-card ${readClass}">
            <div class="description">
                <h2>${myBook[i].title}</h2> 
                <p>${myBook[i].author}</p>  
                <p class="pages">${myBook[i].pages} Pages</p>
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
        myBook[index].read = !myBook[index].read //Toggle the read status by clicking the button
        displayBooks()
        })
    })

    let removeBtns = document.querySelectorAll(".removeBtn")
    removeBtns.forEach((btn, index) => {
        btn.addEventListener("click", (el)=> { 
            let parent = el.target.closest(".book-card") //Find the closest element that matches the selector ".book-card" (h1)
            parent.remove();
            myBook.splice(index, 1)
            displayBooks()
        })
    }) 
}

let addBtn = document.querySelector("#btn-add")
let form = document.querySelector("#book-form")
let container = document.querySelector(".books-container")
let modal = document.querySelector(".modal")
let overlay = document.querySelector("#overlay")
let titleInput = document.getElementById("title")
let authorInput = document.getElementById("author")
let pagesInput = document.getElementById("pages")
let isReadInput = document.getElementById("read")

addBtn.addEventListener("click", modalOn)
overlay.addEventListener("click", ()=> {
    modal.classList.remove("active")
    overlay.classList.remove("active")
})

form.addEventListener("submit", (e)=> {
    e.preventDefault()
    modal.classList.remove("active")
    overlay.classList.remove("active")
    addBookToLibrary()
})

displayBooks() //Display the default books in the myBook array when the page loads
let myBook = [];

// Constructor function
function Book(title, author, read){
        this.Title = title;
        this.Author = author;
        this.Read = read;
}

function modalOn(){
    modal.classList.add("active")
    overlay.classList.add("active")
}

function addBookToLibrary(){
    let bookName = titleInput.value
    let bookAuthor = authorInput.value
    let isRead = isReadInput.checked
    let book1 = new Book(bookName, bookAuthor, isRead)
    myBook.push(book1)
    displayBooks()
}

function displayBooks(){
    container.innerHTML = "" // clear existing book display
    for(let i = 0; i < myBook.length; i++){
        let readStatus = myBook[i].Read ? "read" : "";
        container.innerHTML += `<h1 class="book-card ${readStatus}">Title: ${myBook[i].Title}<br> Author: ${myBook[i].Author}<br> Read: ${myBook[i].Read}<br> <button class="readBtn">Read</button> <br> <button class="removeBtn">Remove</button></h1>`
    } 

    let readBtns = document.querySelectorAll(".readBtn")
    readBtns.forEach((btn, index) => {btn.addEventListener("click", () => { 
        myBook[index].Read = !myBook[index].Read //Toggle the read status by clicking the button
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
    titleInput.value = ""
    authorInput.value = ""
    addBookToLibrary()
})
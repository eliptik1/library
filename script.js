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
    displayBooks(book1)
}

function displayBooks(e){
    container.innerHTML += `<h1 class="book-card">Title: ${e.Title}<br> Author: ${e.Author}<br> Read: ${e.Read}<br> <button class="readBtn">Read</button> <br> <button class="removeBtn">Remove</button></h1>`;
    let cards = document.querySelectorAll(".book-card")
    cards.forEach((card, index) => {
        card.setAttribute("data-index", index)
        if(myBook[index].Read === true){
            card.classList.add("read")
        }
    })

    let removeBtns = document.querySelectorAll(".removeBtn")
    removeBtns.forEach((btn, index) => {
        btn.addEventListener("click", (el)=> { 
            let parent = el.target.closest(".book-card") //Find the closest element that matches the selector ".book-card" (h1)
            parent.remove();
            myBook.splice(index, 1)
        })
    })   
}

let addBtn = document.querySelector("#btn-add")
let submitBtn = document.querySelector("#btn-submit")
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

submitBtn.addEventListener("click", (e)=> {
    modal.classList.remove("active")
    overlay.classList.remove("active")
    addBookToLibrary()
    titleInput.value = ""
    authorInput.value = ""
    e.preventDefault()
})

//List the default books in the myBook array when the page loads
/* for(let i = 0; i < myBook.length; i++){
    container.innerHTML += "<h1>" + `${myBook[i].Title}` + "</h1>"
} */
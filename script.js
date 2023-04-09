let myBook = [{"Title":"Atomic Habits","Author":"James Clear"}, {"Title": "Deep Work"}];

// Constructor function
function Book(){

}

function addBookToLibrary(){
/*    let bookName = prompt("title:")
    let bookAuthor = prompt("author:")
    let book1 = {
        "Title": bookName,
        "Author": bookAuthor,
    }
    myBook.push(book1)
    const newBook = "<h1>" + `${book1.Title}` + "</h1>"
    container.insertAdjacentHTML("beforeend", newBook)
    displayBooks(book1)*/
    modal.classList.add("active")
    overlay.classList.add("active")
}

function displayBooks(e){
    container.innerHTML += "<h1>" + `${e.Title}` + "</h1>"
}

let addBtn = document.querySelector("#btn-add")
let closeBtn = document.querySelector("#btn-close")
let container = document.querySelector(".books-container")
let modal = document.querySelector(".modal")
let overlay = document.querySelector("#overlay")

addBtn.addEventListener("click", addBookToLibrary)
overlay.addEventListener("click", ()=> {
    modal.classList.remove("active")
    overlay.classList.remove("active")
})

closeBtn.addEventListener("click", ()=> {
    modal.classList.remove("active")
    overlay.classList.remove("active")
})

//List the default books in the myBook array when the page loads
for(let i = 0; i < myBook.length; i++){
    container.innerHTML += "<h1>" + `${myBook[i].Title}` + "</h1>"
}
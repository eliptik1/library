let myBook = [{"Title":"Atomic Habits","Author":"James Clear"}, {"Title": "Deep Work"}];

// Constructor function
function Book(){

}

function modalOn(){
    modal.classList.add("active")
    overlay.classList.add("active")
}

function addBookToLibrary(){
    let bookName = document.getElementById("title").value
    //let bookAuthor = prompt("author:")
    let book1 = {
        "Title": bookName,
        //"Author": bookAuthor,
    }
    myBook.push(book1)
    const newBook = "<h1>" + `${book1.Title}` + "</h1>"
    displayBooks(book1)
}

function displayBooks(e){
    container.innerHTML += "<h1>" + `${e.Title}` + "</h1>"
}

let addBtn = document.querySelector("#btn-add")
let submitBtn = document.querySelector("#btn-submit")
let container = document.querySelector(".books-container")
let modal = document.querySelector(".modal")
let overlay = document.querySelector("#overlay")

addBtn.addEventListener("click", modalOn)

overlay.addEventListener("click", ()=> {
    modal.classList.remove("active")
    overlay.classList.remove("active")
})

submitBtn.addEventListener("click", (e)=> {
    modal.classList.remove("active")
    overlay.classList.remove("active")
    addBookToLibrary()
    e.preventDefault()
})

//List the default books in the myBook array when the page loads
for(let i = 0; i < myBook.length; i++){
    container.innerHTML += "<h1>" + `${myBook[i].Title}` + "</h1>"
}
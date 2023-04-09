let myBook = [{"Title":"Atomic Habits","Author":"James Clear"}, {"Title": "Deep Work"}];

// Constructor function
function Book(){

}

function addBookToLibrary(){
    let bookName = prompt("title:")
    let bookAuthor = prompt("author:")
    let book1 = {
        "Title": bookName,
        "Author": bookAuthor,
    }
    myBook.push(book1)
    /*const newBook = "<h1>" + `${book1.Title}` + "</h1>"
    container.insertAdjacentHTML("beforeend", newBook)*/
    displayBooks(book1)
}

function displayBooks(e){
    container.innerHTML += "<h1>" + `${e.Title}` + "</h1>"
}

let addBtn = document.querySelector("#btn-add")
let container = document.querySelector(".books-container")

addBtn.addEventListener("click", addBookToLibrary)


//List the default books in the myBook array when the page loads
for(let i = 0; i < myBook.length; i++){
    container.innerHTML += "<h1>" + `${myBook[i].Title}` + "</h1>"
}
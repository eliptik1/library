let myBook = [{"Title":"Atomic Habits","Author":"James Clear"}];

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
}

let addBtn = document.querySelector("#btn-add")

addBtn.addEventListener("click", addBookToLibrary)

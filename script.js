let myBook = [{"Title":"Atomic Habits","Author":"James Clear"}, {"Title": "Deep Work"}];

// Constructor function
function Book(){

}

function modalOn(){
    modal.classList.add("active")
    overlay.classList.add("active")
}

function addBookToLibrary(){
    let bookName = titleInput.value
    //let bookAuthor = prompt("author:")
    let book1 = {
        "Title": bookName,
        //"Author": bookAuthor,
    }
    myBook.push(book1)
    
    displayBooks(book1)
}

function displayBooks(e){
    container.innerHTML += `<h1 class="book-card"> <button class="removeBtn">Remove</button>${e.Title}</h1>`;
    let removeBtns = document.querySelectorAll(".removeBtn")
    removeBtns.forEach((btn) => {
        btn.addEventListener("click", (e)=> { 
            let parent = e.target.closest(".book-card") //Find the closest element that matches the selector ".book-card"
            parent.remove();
        })
    })   
}

let addBtn = document.querySelector("#btn-add")
let submitBtn = document.querySelector("#btn-submit")
let container = document.querySelector(".books-container")
let modal = document.querySelector(".modal")
let overlay = document.querySelector("#overlay")
let titleInput = document.getElementById("title")


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
    //newBook.classList.add(".book-card")
    e.preventDefault()
})

//List the default books in the myBook array when the page loads
/* for(let i = 0; i < myBook.length; i++){
    container.innerHTML += "<h1>" + `${myBook[i].Title}` + "</h1>"
} */
const bookTitleInput = document.getElementById("book-title");
const bookAuthorInput = document.getElementById("book-author");
const addBookBtn = document.getElementById("add-book");
const bookList = document.getElementById("book-list");

addBookBtn.addEventListener("click", () => {
    const title = bookTitleInput.value.trim();
    const author = bookAuthorInput.value.trim();

    if (title === "" || author === "") {
        alert("Please enter both title and author");
        return; // Prevent further execution if inputs are invalid
    }

    addBook(title, author);
    bookTitleInput.value = "";
    bookAuthorInput.value = "";
});

function addBook(title, author) {
    const li = document.createElement("li");
    const details = document.createElement("span");
    details.className = "details";
    details.textContent = `${title} by ${author}`; // Fixed string interpolation

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(details);
    li.appendChild(deleteBtn);

    bookList.appendChild(li);
}

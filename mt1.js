let books = [
    {
        id: 1,
        title: "The Alchemist",
        author: "Paulo Coelho",
        category: "Fiction",
        year: 1988
    },
    {
        id: 2,
        title: "Wings of Fire",
        author: "APJ Abdul Kalam",
        category: "Biography",
        year: 1999
    },
    {
        id: 3,
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        category: "Finance",
        year: 1997
    }
];
// GET ALL BOOKS
function getAllBooks() {

    let data = "";

    for (let i = 0; i < books.length; i++) {

        data += `
        <tr>
            <td>${books[i].id}</td>
            <td>${books[i].title}</td>
            <td>${books[i].author}</td>
            <td>${books[i].category}</td>
            <td>${books[i].year}</td>
            <td>
                <button class="delete"
                onclick="deleteBook(${books[i].id})">
                Delete
                </button>
            </td>
        </tr>`;
    }

    document.getElementById("bookList").innerHTML = data;
}
// GET BOOK BY ID
function getBook() {

    let id = Number(document.getElementById("bookId").value);

    let book = books.find(b => b.id === id);

    if (book) {

        document.getElementById("title").value = book.title;
        document.getElementById("author").value = book.author;
        document.getElementById("category").value = book.category;
        document.getElementById("year").value = book.year;

        document.getElementById("message").innerHTML =
            "Book Found Successfully";

    } else {
        document.getElementById("message").innerHTML =
            "Book Not Found";
    }
}
// POST - ADD BOOK
function addBook() {

    let id = Number(document.getElementById("bookId").value);
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let category = document.getElementById("category").value;
    let year = Number(document.getElementById("year").value);

    if (!id || !title || !author || !category || !year) {
        alert("Please fill all the details");
        return;
    }

    if (books.some(b => b.id === id)) {
        alert("Book ID already exists");
        return;
    }

    books.push({
        id: id,
        title: title,
        author: author,
        category: category,
        year: year
    });

    alert("Book Added Successfully");

    getAllBooks();
    clearForm();
}
// PUT - UPDATE BOOK
function updateBook() {

    let id = Number(document.getElementById("bookId").value);

    let book = books.find(b => b.id === id);

    if (book) {

        book.title = document.getElementById("title").value;
        book.author = document.getElementById("author").value;
        book.category = document.getElementById("category").value;
        book.year = Number(document.getElementById("year").value);

        alert("Book Updated Successfully");

        getAllBooks();
        clearForm();

    } else {
        alert("Book Not Found");
    }
}
// DELETE BOOK
function deleteBook(id) {

    if (confirm("Are you sure you want to delete this book?")) {

        books = books.filter(b => b.id !== id);

        alert("Book Deleted Successfully");

        getAllBooks();
    }
}
// CLEAR FORM
function clearForm() {

    document.getElementById("bookId").value = "";
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("category").value = "";
    document.getElementById("year").value = "";
}
// DISPLAY BOOKS
getAllBooks();

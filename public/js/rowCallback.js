let books = document.getElementsByClassName('book-row')


const rowCallback = (book) => {
    window.location.href = `/books/view/${book.children[0].innerHTML}`;
}

for (let book of books) {
    book.onclick = (event) => {rowCallback(book)}
}
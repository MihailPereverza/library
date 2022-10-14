const sortByDate = document.getElementById('sort-by-date')
sortByDate.onclick = async () => {
    const res = await fetch("/library/books/view/sort/date", {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.text());
    const bookTable = document.getElementById('book-table')
    bookTable.innerHTML = res
    createUserModal()
}
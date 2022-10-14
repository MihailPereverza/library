const sortByAvailability = document.getElementById('sort-by-availability')
sortByAvailability.onclick = async () => {
    const res = await fetch("/library/books/view/sort/availability", {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.text());
    const bookTable = document.getElementById('book-table')
    bookTable.innerHTML = res
    createUserModal()
}
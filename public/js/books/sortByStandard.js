const sortByStandard = document.getElementById('sort-by-standard')
sortByStandard.onclick = async () => {
    const res = await fetch("/library/books/view/sort/standard", {
        method: "GET",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.text());
    const bookTable = document.getElementById('book-table')
    bookTable.innerHTML = res
    createUserModal()
}
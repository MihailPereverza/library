const addBookModel = document.getElementById('add-book')
document.getElementById('open-add-book').addEventListener('click', ()=>{
    addBookModel.showModal()
})
document.getElementById('close-add-book').addEventListener('click', (e)=>{
    e.preventDefault()
    addBookModel.close()
})
const bookForm = document.getElementById('add-book-form')
bookForm.onsubmit = async (e) => {
    e.preventDefault()
    const obj = {}
    new FormData(bookForm).forEach((v, k) => obj[k] = v)
    const res = await fetch("/library/books/addbook", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());
    if (!res['error']) {
        location.reload();
    }
}
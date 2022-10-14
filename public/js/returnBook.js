const returnBook = async (readerClass, bookId, readerId) => {
    const body = {
        bookId: bookId,
        readerId: readerId
    }
    let res = await fetch(`/library/books/return`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    })
    res = await res.json()
    if (res['error']){
        return
    }
    let el = document.getElementsByClassName(readerClass)[0]
    el.parentNode.removeChild(el)
    el = document.getElementsByClassName('field')[3]
    el.innerHTML = Number(el.innerHTML) + 1
    location.reload();
}
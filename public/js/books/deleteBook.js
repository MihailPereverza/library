const deleteBook = async (bookId) => {
    const res = await fetch(
        `/library/books/del/${bookId}`
    ).then(response => response.json())
    if (!res['error']) {
        location.reload()
    }

}
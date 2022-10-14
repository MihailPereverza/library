let readerInfo = document.getElementById('reader-info')

let opened = null

const createUserModal = () => {
    opened = null
    readerInfo = document.getElementById('reader-info')

    for (let el of document.getElementsByClassName('open-modal-users')) {
        el.addEventListener('change', async (e) => {
            const res = await fetch(
                `/library/readers/${e.target.value}`
            )
            const user = await res.json()
            readerInfo.getElementsByClassName('fio-reader')[0].innerHTML = `${user.firstName} ${user.lastName}`

            let ul = document.createElement('ul')
            for (let bookId of Object.keys(user.books)) {
                const book = await fetch(
                    `/library/books/get/${bookId}`
                ).then(response => response.json())
                const li = document.createElement('li')
                li.innerHTML = `${book.title} : ${book.readers[user.id.toString()]}`
                ul.appendChild(li)
            }
            opened = e.target
            readerInfo.getElementsByClassName('lease-books')[0].innerHTML = ''
            readerInfo.getElementsByClassName('lease-books')[0].appendChild(ul)
            readerInfo.showModal()
        })
    }
    document.getElementById('close-reader-info').onclick = () => {
        readerInfo.close()
        opened.value = ''
    }
}

createUserModal()
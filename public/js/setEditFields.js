const editBook = async () => {
    let fields = document.getElementsByClassName('field')
    let body = {
        id: fields[0].children.length ? fields[0].children[0].value: fields[0].innerHTML,
        title: fields[1].children.length ? fields[1].children[0].value: fields[1].innerHTML,
        year: fields[3].children.length ? fields[3].children[0].value: fields[3].innerHTML,
        count: fields[4].children.length ? fields[4].children[0].value: fields[4].innerHTML,
        author: fields[2].children.length ? fields[2].children[0].value: fields[2].innerHTML,

    }

    let res = await fetch(`/library/books/edit`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(body)
    })
    return await res.json()
}
let fields = document.getElementsByClassName('field')
for (let i = 1; i < fields.length; i++) {
    let field = fields[i]
    field.addEventListener('click', function func() {
        let input = document.createElement('input')
        let first_value = this.innerHTML
        input.value = this.innerHTML
        this.innerHTML = ''
        this.appendChild(input)
        let obj = this
        input.addEventListener('blur', async () => {
            let res = await editBook()
            field.addEventListener('click', func)
            if (res['error']) {
                obj.innerHTML = first_value
                return
            }
            obj.innerHTML = input.value
            location.reload();
        })
        this.removeEventListener('click', func)
    })
}
const addReaderModal = document.getElementById('add-reader')
document.getElementById('open-add-reader').addEventListener('click', ()=>{
    addReaderModal.showModal()
})
document.getElementById('close-add-reader').addEventListener('click', (e)=>{
    e.preventDefault()
    addReaderModal.close()
})
const readerForm = document.getElementById('add-reader-form')
readerForm.onsubmit = async (e) => {
    e.preventDefault()
    const obj = {}
    new FormData(readerForm).forEach((v, k) => obj[k] = v)
    const res = await fetch("/library/readers/add", {
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
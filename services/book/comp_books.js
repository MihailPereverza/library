export const compBooksByDate = (book1, book2) => {
    let date1 = Object.values(book1['readers'])
    let date2 = Object.values(book2['readers'])
    if (Number(!!date1.length) + Number(!!date2.length) !== 2) {
        return Number(date1 !== []) - Number(date2 !== [])
    }
    date1 = date1.map(date => new Date(date))
    date2 = date2.map(date => new Date(date))

    date1 = date1.sort((a, b) => a - b)[0]
    date2 = date2.sort((a, b) => a - b)[0]
    return date1 - date2
}

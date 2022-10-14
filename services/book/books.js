import {getLibrary, saveLibrary} from "../library.js";
import {compBooksByDate} from "./comp_books.js";
import {validateAddReader, validateBookId, validateFindBook, validateReturnBook} from "./validates.js";
import {ValidationError} from "../errors.js";


let BOOKS_BY_DATE = null
let BOOKS_BY_AVAILABILITY = null


const invalidateBooksCache = () => {
    BOOKS_BY_AVAILABILITY = BOOKS_BY_DATE = null
}


export const getBookById = (bookId) => {
    const library = getLibrary()
    validateBookId(library, bookId)
    return library['books'][bookId.toString()]
}


export const getBooks = () => {
    return Object.values(getLibrary()['books'])
}


export const getBooksByDate = () => {
    if (BOOKS_BY_DATE) {
        return BOOKS_BY_DATE
    }
    let books = getLibrary()['books']
    BOOKS_BY_DATE = Object.values(books).sort(compBooksByDate)
    return BOOKS_BY_DATE
}


export const getBooksByAvailability = () => {
    if (BOOKS_BY_AVAILABILITY) {
        return BOOKS_BY_AVAILABILITY
    }
    let books = getLibrary()['books']
    books = Object.values(books).sort()
    BOOKS_BY_AVAILABILITY = books.filter(book => book['count'] > 0)
    return BOOKS_BY_AVAILABILITY
}


export const addBook = (title, count, year, author) => {
    const library = getLibrary()
    const newBookId = ++library["lastBookId"]
    const newBook = {
        id: newBookId,
        title: title,
        count: count,
        year: year,
        readers: {},
        author: author
    }
    library["books"][newBookId.toString()] = newBook
    saveLibrary()
    invalidateBooksCache()
    return newBook
}


export const delBook = (bookId) => {
    const library = getLibrary()
    if (!library["books"][bookId.toString()]){
        throw new ValidationError(`Not found book with bookId=${bookId})`)
    }
    if (Object.keys(library['books'][bookId.toString()]['readers']).length){
        throw new ValidationError(`Book=${bookId} was reading`)
    }
    // if (library["books"][bookId.toString()].readers.length !== 0) {
    //     throw new ValidationError(`Book=${bookId}) was reading`)
    // }
    let book = library["books"][bookId.toString()]
    delete library["books"][bookId.toString()]
    invalidateBooksCache()
    saveLibrary()
    return book
}


export const addReader = (bookId, readerId, dayLease) => {
    let library = getLibrary()
    validateAddReader(library, bookId, readerId, dayLease)
    let date = new Date()
    date.setDate(date.getDate() + Number(dayLease))
    library['books'][bookId.toString()]['readers'][readerId.toString()] = `${date.getFullYear()}-${date.getUTCMonth() + 1}-${date.getDate()}`
    library['books'][bookId.toString()]['count']--
    library['users'][readerId.toString()]['books'][bookId.toString()] = true
    invalidateBooksCache()
    saveLibrary()
    return true
}


export const returnBook = (bookId, readerId) => {
    let library = getLibrary()
    validateReturnBook(library, bookId, readerId)
    delete library['books'][bookId.toString()]['readers'][readerId.toString()]
    library['books'][bookId.toString()]['count']++
    delete library['users'][readerId.toString()]['books'][bookId.toString()]
    invalidateBooksCache()
    saveLibrary()
    return true
}


export const editBook = (bookId, title, count, year, author) => {
    let library = getLibrary()
    validateFindBook(library, bookId, title, count, year, author)
    library['books'][bookId.toString()] = {
        id: bookId,
        title: title,
        count: count,
        year: year,
        author: author,
        readers: library['books'][bookId.toString()]['readers']
    }
    BOOKS_BY_AVAILABILITY = null
    saveLibrary()
    return library['books'][bookId.toString()]
}


// addReader(2, 2, 7)
// addReader(2, 1, 7)
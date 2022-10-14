import {getLibrary, saveLibrary} from "../library.js";
import {validateDelReader, validateFullName, validateReaderId} from "./validate.js";
import {validateBookId} from "../book/validates.js";


export const getReaderById = (readerId) => {
    const library = getLibrary()
    validateReaderId(library, readerId)
    return library['users'][readerId.toString()]
}


export const getReaderWithoutBook = (bookId) => {
    const library = getLibrary()
    validateBookId(library, bookId)
    let readers = Object.values(library['users'])
    return readers.filter(reader => !reader.books[bookId.toString()])
}


export const addReader = (firstName, lastName, patronymic) => {
    const library = getLibrary()
    const newReaderId = ++library["lastUserId"]
    validateFullName(firstName, lastName, patronymic)

    const user = {
        id: newReaderId,
        firstName: firstName.toString(),
        lastName: lastName.toString(),
        patronymic: patronymic.toString(),
        books: {}
    }
    library['users'][newReaderId.toString()] = user
    saveLibrary()
    return user
}


export const delReader = (readerId) => {
    const library = getLibrary()
    validateReaderId(library, readerId)
    validateDelReader(library, readerId)
    delete library['users'][readerId.toString()]
    saveLibrary()
}


export const editReader = (readerId, firstName, lastName, patronymic) => {
    const library = getLibrary()
    validateFullName(firstName, lastName, patronymic)
    validateReaderId(library, readerId)
    library['users'][readerId.toString()] = {
        id: Number(readerId),
        firstName: firstName.toString(),
        lastName: lastName.toString(),
        patronymic: patronymic.toString()
    }
    saveLibrary()
}

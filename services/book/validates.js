import {ValidationError} from "../errors.js";


export const validateAddReader = (library, bookId, readerId, dayLease) => {
    if (!library["users"][readerId.toString()]) {
        throw new ValidationError(`No found user with userId=${readerId}`)
    }
    if (isNaN(dayLease.toString())) {
        throw new ValidationError(`dayLease is not integer`)
    }
    if (Number(dayLease) < 1) {
        throw new ValidationError(`dayLease less than 1`)
    }
    if (!library["books"][bookId.toString()]){
        throw new ValidationError(`Not found book with bookId=${bookId})`)
    }
    if (library["books"][bookId.toString()].count < 1) {
        throw new ValidationError(`Book=${bookId} in lease`)
    }
    if (Object.keys(library["books"][bookId.toString()]['readers']).filter(
        userId => readerId.toString() === userId
    ).length !== 0) {
        throw new ValidationError(`Book=${bookId} has been already leased by user ${readerId}`)
    }
}


export const validateFindBook = (library, bookId, title, count, year, author) => {
    if (!author) {
        throw new ValidationError(`author is empty`)
    }
    if (!library['books'][bookId.toString()]) {
        throw new ValidationError(`No found bookId=${bookId}`)
    }
    if (!title) {
        throw new ValidationError('Empty title')
    }
    if (!Number.isInteger(Number(count))){
        throw new ValidationError(`Count ${count} is not integer`)
    }
    if (!Number.isInteger(Number(bookId))) {
        throw new ValidationError(`bookId ${bookId} is not integer`)
    }
    if (!Number.isInteger(Number(year))) {
        throw new ValidationError(`year ${year} is not integer`)
    }
    if (Number(year) > (new Date()).getFullYear()) {
        throw new ValidationError(`year longer than the current one`)
    }
    if (count < 0) {
        throw new ValidationError(`Count ${count} < 0`)
    }
}


export const validateReturnBook = (library, bookId, readerId) => {
    if (!Number.isInteger(Number(bookId))) {
        throw new ValidationError(`bookId ${bookId} is not integer`)
    }
    if (!library['books'][bookId.toString()]) {
        throw new ValidationError(`No found bookId=${bookId}`)
    }
    if (!Number.isInteger(Number(readerId))) {
        throw new ValidationError(`readerId=${readerId} is not integer`)
    }
    if (!library["users"][readerId.toString()]) {
        throw new ValidationError(`No found user with userId=${readerId}`)
    }
    if (Object.keys(library["books"][bookId.toString()]['readers']).filter(
        userId => readerId.toString() === userId
    ).length === 0) {
        throw new ValidationError(`readerId=${readerId} wasn't take bookId=${bookId}`)
    }
}


export const validateBookId = (library, bookId) => {
    if (!Number.isInteger(Number(bookId))) {
        throw new ValidationError(`bookId ${bookId} is not integer`)
    }
    if (!library['books'][bookId.toString()]) {
        throw new ValidationError(`No found bookId=${bookId}`)
    }
}
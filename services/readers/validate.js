import {ValidationError} from "../errors.js";


export const validateFullName = (firstName, lastName, patronymic) => {
    if (!firstName || !lastName || !patronymic) {
        throw new ValidationError(`firstName or lastName or patronymic is empty`)
    }
}


export const validateReaderId = (library, readerId) => {
    if (!Number.isInteger(Number(readerId))) {
        throw new ValidationError('readerId isnt integer')
    }
    if (!library['users'][readerId.toString()]) {
        throw new ValidationError(`not found reader with readerId=${readerId}`)
    }
}


export const validateDelReader = (library, readerId) => {
    const books = library['users'][readerId.toString()]['books']
    if (Object.values(books).length) {
        throw new ValidationError(`cant delete user, because he has leased books`)
    }
}

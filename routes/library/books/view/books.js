import {Router} from "express";
import {getBookById, getBooks} from "../../../../services/book/books.js";
import {getReaderById, getReaderWithoutBook} from "../../../../services/readers/readers.js";


const router = Router()


router.get('/books', (req, res) => {
    res.render('books', {
        title: 'Все книги',
        books: getBooks(),
        getUser: getReaderById,
    })
})


export {router as booksRouter}
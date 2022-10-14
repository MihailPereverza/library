import {Router} from "express";
import {getBookById, getBooks, getBooksByDate} from "../../../../services/book/books.js";
import {getReaderById, getReaderWithoutBook} from "../../../../services/readers/readers.js";


const router = Router()


router.get('/sort/standard', (req, res) => {
    res.render('includes/tbody', {
        books: getBooks(),
        getUser: getReaderById,
    })
})


export {router as standardBooksRouter}
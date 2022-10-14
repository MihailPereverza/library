import {Router} from "express";
import {getBookById, getBooks, getBooksByDate} from "../../../../services/book/books.js";
import {getReaderById, getReaderWithoutBook} from "../../../../services/readers/readers.js";


const router = Router()


router.get('/sort/date', (req, res) => {
    res.render('includes/tbody', {
        books: getBooksByDate(),
        getUser: getReaderById,
    })
})


export {router as dateBooksRouter}
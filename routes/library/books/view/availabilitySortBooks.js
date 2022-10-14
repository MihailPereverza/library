import {Router} from "express";
import {getBookById, getBooks, getBooksByAvailability, getBooksByDate} from "../../../../services/book/books.js";
import {getReaderById, getReaderWithoutBook} from "../../../../services/readers/readers.js";


const router = Router()


router.get('/sort/availability', (req, res) => {
    res.render('includes/tbody', {
        books: getBooksByAvailability(),
        getUser: getReaderById,
    })
})


export {router as availabilityBooksRouter}
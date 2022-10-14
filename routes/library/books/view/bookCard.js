import {Router} from "express";
import {getBookById} from "../../../../services/book/books.js";
import {getReaderById, getReaderWithoutBook} from "../../../../services/readers/readers.js";


const router = Router()


router.get('/:id([0-9]{1,})', (req, res) => {
    res.render('bookCard', {
        title: 'books',
        book: getBookById(req.params.id),
        getReaderData: getReaderById,
        readers: getReaderWithoutBook(req.params.id),
    })
})


export {router as bookCardRouter}
import {Router} from "express";
import {viewRouter} from "./view/__init__.js";
import {editBookRouter} from "./editBook.js";
import {returnBookRouter} from "./returnBook.js";
import {addReaderRouter} from "./addReader.js";
import {getBookRouter} from "./getBook.js";
import {deleteBookRouter} from "./deleteBook.js";
import {addBookRouter} from "./addBook.js";


const router = Router()


router.use('/view', viewRouter)
router.use('/', getBookRouter)
router.use('/', addBookRouter)
router.use('/', deleteBookRouter)
router.use('/', editBookRouter)
router.use('/', returnBookRouter)
router.use('/', addReaderRouter)


export {router as booksRouter}
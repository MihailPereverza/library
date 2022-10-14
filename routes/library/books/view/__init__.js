import {Router} from "express";
import {bookCardRouter} from "./bookCard.js";
import {booksRouter} from "./books.js";
import {dateBooksRouter} from "./dateSortBooks.js";
import {availabilityBooksRouter} from "./availabilitySortBooks.js";
import {standardBooksRouter} from "./standartTable.js";


const router = Router()


router.use('/', booksRouter)
router.use('/', dateBooksRouter)
router.use('/', availabilityBooksRouter)
router.use('/', standardBooksRouter)
router.use('/', bookCardRouter)


export {router as viewRouter}
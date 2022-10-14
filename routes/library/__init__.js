import {Router} from "express";
import {booksRouter} from "./books/__init__.js";
import {readersRouter} from "./readers/__init__.js";

const router = Router()


router.use('/books', booksRouter)
router.use('/readers', readersRouter)


export {router as libraryRouter}
import {Router} from "express";
import {getReaderRouter} from "./getReader.js";
import {addReaderRouter} from "./addReader.js";

const router = Router()


router.use('/', getReaderRouter)
router.use('/', addReaderRouter)


export {router as readersRouter}
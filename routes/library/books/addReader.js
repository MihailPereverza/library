import {addReader} from "../../../services/book/books.js";
import express from "express";
import formidable from 'express-formidable'

const router = express.Router()
router.use(express.json());

router.post('/addreader', (req, res) => {
    const body = req.body
    try {
        addReader(body.bookId, body.readerId, body.dayLease)
        res.json(true)
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as addReaderRouter}
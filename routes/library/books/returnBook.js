import express from "express";
import bodyParser from 'body-parser'
import {returnBook} from "../../../services/book/books.js";


const router = express.Router()
router.use(bodyParser.json())

router.post('/return', (req, res) => {
    const body = req.body
    try {
        res.json(returnBook(body.bookId, body.readerId))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
        }
    }
})


export {router as returnBookRouter}
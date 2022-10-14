import {addBook} from "../../../services/book/books.js";
import express from "express";

const router = express.Router()
router.use(express.json());

router.post('/addbook', (req, res) => {
    const body = req.body
    try {
        res.json(addBook(body.title, body.count, body.year, body.author))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as addBookRouter}
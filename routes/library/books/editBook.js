import {editBook} from "../../../services/book/books.js";
import express from "express";
import bodyParser from 'body-parser'


const router = express.Router()
router.use(bodyParser.json())

router.post('/edit', (req, res) => {
    const body = req.body
    try {
        res.json(editBook(body.id, body.title, body.count, body.year, body.author))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
        }
    }
})


export {router as editBookRouter}
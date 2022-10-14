import express from "express";
import bodyParser from 'body-parser'
import {getBookById, returnBook} from "../../../services/book/books.js";


const router = express.Router()

router.get('/get/:id([0-9]{1,})', (req, res) => {
    try {
        res.json(getBookById(req.params.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
        }
    }
})


export {router as getBookRouter}
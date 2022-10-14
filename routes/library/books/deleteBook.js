import express from "express";
import {delBook} from "../../../services/book/books.js";


const router = express.Router()

router.get('/del/:id([0-9]{1,})', (req, res) => {
    try {
        res.json(delBook(req.params.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
        }
    }
})


export {router as deleteBookRouter}
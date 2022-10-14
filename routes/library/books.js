import express, {json} from "express";
import {editBook, getBookById, getBooksByAvailability, getBooksByDate} from "../../services/book/books.js";


const router = express.Router()


router.get('/:id([0-9]{1,})', (req, res) => {
    try {
        res.json(getBookById(req.params.id))
    }
    catch (e) {
    if (e.name === 'ValidationError') {
        res.json({'error': e.name, 'message': e.message})
    }
    }
})


router.get('/lease', (req, res) => {
    try {
        res.json(getBooksByDate())
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
        }
    }
})


router.get('/availability', (req, res) => {
    try {
        res.json(getBooksByAvailability())
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
        }
    }
})


router.use(express.json)
router.post('/add', (req, res) => {
    res.json(req.body)
})





export {router as bookRouter}
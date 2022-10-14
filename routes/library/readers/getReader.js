import {Router} from "express";
import {addReader} from "../../../services/book/books.js";
import {getReaderById} from "../../../services/readers/readers.js";

const router = Router()


router.get('/:id([0-9]{1,})', (req, res) => {
    try {
        res.json(getReaderById(req.params.id))
    } catch (e) {
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as getReaderRouter}
import express, {Router} from "express";
import {addReader} from "../../../services/readers/readers.js";

const router = Router()
router.use(express.json());


router.post('/add', (req, res) => {
    const body = req.body
    try {
        res.json(addReader(body.firstName, body.lastName, body.patronymic))
    } catch (e) {
        console.log(e)
        if (e.name === 'ValidationError') {
            res.json({'error': e.name, 'message': e.message})
            return
        }
        res.json({'error': 'something', 'message': 'some error'})
    }
})


export {router as addReaderRouter}
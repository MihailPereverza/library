import express from 'express'
import path from 'path'
import {indexRouter} from "./routes/index.js";
import ejsMate from 'ejs-mate';
import {libraryRouter} from "./routes/library/__init__.js";
import {getBooks} from "./services/book/books.js";


const __dirname = path.resolve()
const PORT = 322
const app = express()


app.engine('ejs', ejsMate)
app.set('views', path.resolve(__dirname, 'page_templates'))
app.set('view engine', 'ejs')

// определение роутера под фавикон
app.use(express.static('public'));


const rowCallbackf = (book) => {
    console.log(book)
}


app.get('/', (req, res) => {
    res.render('index', {
        title: 'Home page',
        data: getBooks(),
        rowCallbackName: 'rowCallback'
    })
})

// регистрация роутеров
app.use('/library', libraryRouter)


app.listen(PORT, ()=>{console.log(`app was start in port ${PORT}...`)})

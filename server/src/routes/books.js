import express from 'express'
import BookController from '../app/controller/bookController.js'

var bookRouter = express.Router()

bookRouter
    .route('/detail/:id')
    .get(BookController.detail)
bookRouter
    .route('/page/:page')
    .get(BookController.page)
bookRouter
    .route('/')
    .get(BookController.index)

export default bookRouter
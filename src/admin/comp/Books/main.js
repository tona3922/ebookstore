import React, { Component } from 'react'
import Card from './book_info'
// import books from './trending_books'
import "./books.scss"

import BookDetails from './book_details'
import AddBookForm from './addbook'
import {
    Link,
    Routes as Switch,
    Route,
} from "react-router-dom"

import axios from "axios"
// import { wait } from '@testing-library/user-event/dist/utils'

export default class Books extends Component {
    // state = []
    // data = []
    state = {
        books: []
    }

    viewImage = (bookImage) => {
        var data = new Uint8Array(bookImage.data)
        var blob = new Blob([data])
        return URL.createObjectURL(blob, { type: 'image' })
    }

    async componentDidMount() {
        var res = await axios.get('http://localhost:8080/books/page/1')
        res.data.map(book => {
            var src = '';
            if (book.image != null) {
                src = this.viewImage(book.image)
            }
            this.setState(prevState => ({
                books: [...prevState.books, { ...book, img: src }]
            }))
        })
    }

    getBook = (id) => {
        return this.state.stock[id]
    }

    render() {
        // console.log("Hello", this.state)
        return <div className="books" >
            {
                this.state.books.map((book, index) => {
                    // console.log(book.img)
                    return <Link className="stock-link" to={"/admin/shop/id/" + book.id}><Card book={book} key={index} /></Link>
                }
                )
            }
            < Switch >
                <Route
                    path="id/:id/*"
                    element={<BookDetails />}
                />
                <Route
                    path="/addbook"
                    element={<AddBookForm />}
                />

            </Switch>
        </div >
    }
}
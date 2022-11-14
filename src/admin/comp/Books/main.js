import React from 'react';
import Card from './book_info';
import books from './trending_books';
import "./books.scss"


export default function Books() {
    return (
        <div className="books">
            {
                books.map((book, index) => {
                    return <Card book={book} key={index} />;
                }
                )
            }
        </div>
    )
}
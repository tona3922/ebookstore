import React from 'react';

const Card = (props) => {
    console.log("asd", props.book)
    return (
        <div className="book-card">
            <img src={props.book.img} className="book-image" alt=""></img>
            <div className="book-info">
                <h6 className="book-title">{props.book.booktitle}</h6>
                <h6 className="book-author">{props.book.author_name}</h6>
                <h6 className="book-price">{props.book.price} VNĐ</h6>
            </div>
        </div>
    )
}

export default Card;
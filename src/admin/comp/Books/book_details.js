import axios from 'axios'
import React, { Component, useState, useEffect } from 'react'
// import "./stock.scss"
import Header from "../header/header"
import BookForm from '../Form/book-form'
import {
    useParams,
    withRouter,
} from "react-router-dom"

const viewImage = (bookImage) => {
    if (typeof bookImage === 'undefined') return ""
    var data = new Uint8Array(bookImage.data)
    var blob = new Blob([data])
    return URL.createObjectURL(blob, { type: 'image' })
}

export default function BookDetails(props) {
    const id = useParams()
    const [book, setBook] = useState([])
    const [img, setImg] = useState([])
    // const stock = props.stock(id.id)
    // let quantity = 0
    // for (let i = 0; i < stock.booklist.length; i++) {
    //     quantity += parseInt(stock.booklist[i][2])
    // }
    // console.log(id)

    useEffect(() => {
        const fetchBook = async () => {
            const response = await axios(
                'http://localhost:8080/books/detail/' + id.id.toString(),
            )
            setImg(viewImage(response.data.image))
            setBook(...response.data)

            // setBook({ ...book, image: viewImage(response.data) })
        }
        // axios
        //     .get('http://localhost:8080/books/detail/' + id.id.toString())
        //     .then(response => {
        //         setInfo(response.data)
        //         console.log(info)
        //     })
        fetchBook()
    }, [setBook, setImg]);

    const handleChange = (event) => {
        setBook({
            // img: book.img,
            // id: book.id,
            ...book,
            ISBN: event.target.ISBN,
            author_name: event.target.author_name,
            detail: event.target.detail,
            price: event.target.price,
            // stock: book.stock,
            booktitle: event.target.booktitle
        })
    }
    // const img = viewImage(book.image)
    console.log(viewImage(book.image))
    return (
        <div className="pop-up">
            <div className="pop-up-page">
                {/* <Table header={props.tableHeader} info={props.stock()} /> */}
                <Header title="Ch???nh s???a th??ng tin s???n ph???m" searchbarPH="" />
                <div className="pop-up-book-detail">
                    <div className="book-img">
                        <img src={viewImage(book.image)} />
                    </div>
                    <div className="pop-up-details">
                        <form className="card-form" style={{ "margin": "0 6em" }} onChange={handleChange}>
                            <div className="form-tag"><h1>Th??ng tin s??ch</h1></div>
                            <div className="multi-inputs">
                                <div className="form--input" style={{ "width": "75%" }}>
                                    <input type="text" className="input-field" value={book.booktitle} name="booktitle" required />
                                    <label className="input-label">T??n s??ch</label>
                                </div>
                                <div className="form--input" style={{ "width": "25%" }}>
                                    <input type="text" className="input-field" value={book.ISBN} name="ISBN" required />
                                    <label className="input-label">M?? ISBN</label>
                                </div>
                            </div>
                            <div className="multi-inputs">
                                <div className="form--input" style={{ "width": "75%" }}>
                                    <input type="text" className="input-field" value={book.author_name} name="author_name" onChange={handleChange} required />
                                    <label className="input-label">T??c gi???</label>
                                </div>
                                <div className="form--input" style={{ "width": "25%" }}>
                                    <input type="text" className="input-field" value={book.publisher} name="publisher" onChange={handleChange} required />
                                    <label className="input-label">Nh?? xu???t b???n</label>
                                </div>
                            </div>
                            <div className="multi-inputs">
                                <div className="form--input" style={{ "width": "100%" }}>
                                    {/* <label className="input-label">N???i dung s??ch */}
                                    <h6 >N???i dung s??ch</h6>
                                    <textarea rows="4" className="input-field" value={book.detail} name="detail" onChange={handleChange} />
                                    {/* </label> */}
                                </div>
                            </div>

                            {/* </form >

                <form className="card-form"> */}
                            <div className="form-tag"><h1>Th??ng tin b??n h??ng</h1></div>
                            <div className="multi-inputs">
                                <div className="form--input">
                                    <input type="text" className="input-field" value={book.price} onChange={handleChange} name="price" required />
                                    <label className="input-label">Gi?? b??n</label>
                                </div>
                                <div className="form--input">
                                    <input type="text" className="input-field" value={book.stock} onChange={handleChange} name="price" readonly />
                                    <label className="input-label">T???n Kho</label>
                                </div>
                            </div>
                            <div className="multi-action">
                                <button className="action-button-save">L??u</button>
                                <button className="action-button-disable">Ng??ng b??n</button>
                                {/* <button className="action-button">Th??m v??o ti???m!</button> */}
                            </div>
                        </form >
                    </div>
                </div>
            </div>
        </div>
    )
}
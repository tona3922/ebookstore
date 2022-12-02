import React, { Component } from 'react'
import './form.scss';
export default class AddBookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isbn: "",
            title: "",
            author: "",
            publisher: "",
            detail: "",
            price: "",
            stock: "",
            img: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.img)
        this.setState({
            isbn: event.target.isbn,
            booktitle: event.target.booktitle,
            author: event.target.author,
            publisher: event.target.publisher,
            detail: event.target.detail,
            price: event.target.price,
            stock: event.target.stock,
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form className="card-form" onChange={this.handleChange}>
                <div className="form-tag"><h1>Thông tin sách</h1></div>
                <div className="multi-inputs">
                    <div className="form--input" style={{ "width": "75%" }}>
                        <input type="text" className="input-field" value={this.state.booktitle} required />
                        <label className="input-label">Tên sách</label>
                    </div>
                    <div className="form--input" style={{ "width": "25%" }}>
                        <input type="text" className="input-field" value={this.state.isbn} required />
                        <label className="input-label">Mã ISBN</label>
                    </div>
                </div>
                <div className="multi-inputs">
                    <div className="form--input" style={{ "width": "75%" }}>
                        <input type="text" className="input-field" value={this.state.author} onChange={this.handleChange} required />
                        <label className="input-label">Tác giả</label>
                    </div>
                    <div className="form--input" style={{ "width": "25%" }}>
                        <input type="text" className="input-field" value={this.state.publisher} onChange={this.handleChange} required />
                        <label className="input-label">Nhà xuất bản</label>
                    </div>
                </div>
                <div className="multi-inputs">
                    <div className="form--input" style={{ "width": "75%" }}>
                        {/* <label className="input-label">Nội dung sách */}
                        <h6 >Nội dung sách</h6>
                        <textarea rows="4" className="input-field" value={this.state.detail} onChange={this.handleChange} />
                        {/* </label> */}
                    </div>
                    <div className="form--input" style={{ "width": "25%" }}>
                        <input
                            type="file"
                            name="myImage"
                            className="upload-field"
                            value={this.state.img}
                            onChange={this.handleChange}
                        // onChange={(event) => {
                        // console.log(event.target.files[0]);
                        // setSelectedImage(event.target.files[0]);
                        // }}
                        />
                        <label className="input-label" for="files">Ảnh bìa</label>
                    </div>
                </div>

                {/* </form >

                <form className="card-form"> */}
                <div className="form-tag"><h1>Thông tin bán hàng</h1></div>
                <div className="multi-inputs">
                    <div className="form--input">
                        <input type="text" className="input-field" value={this.state.price} onChange={this.handleChange} required />
                        <label className="input-label">Giá bán</label>
                    </div>
                    <div className="form--input">
                        <select id="role" className="input-field" value={this.state.stock} onChange={this.handleChange}>
                            <option value="A">Nhà Kho A</option>
                            <option value="B">Nhà Kho B</option>
                        </select>
                        <label className="input-label">Nhà Kho</label>
                    </div>
                </div>
                <div className="action">
                    <button className="action-button">Thêm vào tiệm!</button>
                </div>
            </form >
        )
    }
}

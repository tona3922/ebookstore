import React, { Component } from 'react'
import './form.scss';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: "",
            confirmedPassword: "",
            Fname: "",
            ssid: "",
            sex: "M",
            birth: "2002-12-24",
            phoneNumber: "",
            address: "",
            role: 1
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.birth)
        this.setState({
            username: event.target.username,
            email: event.target.email,
            password: event.target.password,
            confirmedPassword: event.target.confirmedPassword,
            Fname: event.target.Fname,
            ssid: event.target.ssid,
            sex: event.target.sex,
            birth: event.target.birth,
            phoneNumber: event.target.phoneNumber,
            address: event.target.address,
            role: event.target.role,
        })
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value)
        event.preventDefault()
    }

    render() {
        return (
            <form className="card-form" onChange={this.handleChange}>
                <div className="form-tag"><h1>Thông tin đăng nhập</h1></div>
                <div className="multi-inputs">
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="text" className="input-field" value={this.state.username} required />
                        <label className="input-label">Username</label>
                    </div>
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="text" className="input-field" value={this.state.email} required />
                        <label className="input-label">Email</label>
                    </div>
                </div>
                <div className="multi-inputs">
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="password" className="input-field" value={this.state.password} required />
                        <label className="input-label">Mật khẩu</label>
                    </div>
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="password" className="input-field" value={this.state.confirmedPassword} required />
                        <label className="input-label" >Xác nhận mật khẩu</label>
                    </div>
                </div>
                {/* </form >

                <form className="card-form"> */}
                <div className="form-tag"><h1>Thông tin cá nhân</h1></div>
                <div className="multi-inputs">
                    <div className="form--input" >
                        <input type="text" className="input-field" value={this.state.Fname} required />
                        <label className="input-label">Họ và tên</label>
                    </div>
                    <div className="form--input" >
                        <input type="text" className="input-field" value={this.state.ssid} required />
                        <label className="input-label">Số CMND</label>
                    </div>
                </div>
                <div className="multi-inputs" >
                    <div className="form--input" style={{ "width": "25%" }}>
                        <select id="gender" value={this.state.sex} className="input-field">
                            <option value="M">Nam</option>
                            <option value="F">Nữ</option>
                        </select>
                        <label className="input-label">Giới tính</label>
                    </div>
                    <div className="form--input" style={{ "width": "25%" }}>
                        <input type="date" className="input-field" value={this.state.birth} required />
                        {/* <DatePicker selected={this.state.birth} className="form--input" /> */}
                        <label className="input-label">Ngày sinh</label>
                    </div>
                    <div className="form--input" style={{ "width": "50%" }}>
                        <input type="form--input" className="input-field" value={this.state.phoneNumber} required />
                        <label className="input-label">Số điện thoại</label>
                    </div>
                </div>
                <div className="form--input">
                    <input type="form--input" className="input-field" value={this.state.address} required />
                    <label className="input-label">Địa chỉ</label>
                </div>
                {this.props.type === "admin" &&
                    <div className="form--input">
                        <select id="role" className="input-field" value={this.state.role}>
                            <option value={1}>Khách hàng</option>
                            <option value={2}>Quản lý</option>
                            <option value={3}>Admin</option>
                        </select>
                        <label className="input-label">Vai trò của tài khoản</label>
                    </div>}
                <div className="action">
                    <button className="action-button">Đăng kí tài khoản</button>
                </div>
            </form >
        )
    }
}

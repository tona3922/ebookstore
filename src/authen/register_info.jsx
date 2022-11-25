import React from "react";
import { Link } from "react-router-dom";
import back_icon from "../img/back.png"
import ok_icon from '../img/button/ok.png';
import "./register_info.css";

export function InfoInput (props) {
    return(
        <div className="info-input">
            <label className="register-label" htmlFor="">{props.labelName}</label>
            <input className="register-input" type={props.type} placeholder={props.labelName} defaultValue={props.defaultVal}/>
        </div>
    );
}

export const Register_info = () => {
    return(
        <div className="register-page">
            <div className="register-container">
                <header className="register-header">
                    <h1>THÔNG TIN CÁ NHÂN</h1>
                </header>
                <div className="register-content">
                    <InfoInput 
                        labelName = "Họ và tên"
                        type = "text"
                    />
                    <div className="sex-option">
                        <label className="register-label" htmlFor="">Giới tính</label>
                        <input className="register-radio" type="radio" value="Nam" name="sex"/> Nam
                        <input className="register-radio" type="radio" value="Nữ" name="sex"/> Nữ
                    </div>
                    <InfoInput 
                        labelName = "Ngày sinh"
                        type = "date"
                    />
                    <InfoInput 
                        labelName = "Số điện thoại"
                        type = "text"
                    />
                    <InfoInput 
                        labelName = "Email"
                        type = "text"
                    />
                    <InfoInput 
                        labelName = "Địa chỉ"
                        type = "text"
                    />
                    <div className="button-container">
                        <Link to="/signup">
                            <button className="btn back-btn-reg">
                                <img src={back_icon} alt="" />
                                Quay lại
                            </button>
                        </Link>
                        <button className="btn confirm-btn">
                            <img src={ok_icon} alt="" />
                            Xác nhận
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
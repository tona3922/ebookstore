import React from "react";
import { Link } from "react-router-dom";
import back_icon from "../img/back.png"
import ok_icon from '../img/button/ok.png';
import "./register_info.css";

function Info_input (props) {
    return(
        <div className="info-input">
            <label className="register-label" htmlFor="">{props.labelName}</label>
            <input className="register-input" type="text" placeholder={props.labelName}/>
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
                    <Info_input 
                        labelName = "Họ và tên"
                    />
                    <div>
                        <label className="register-label" htmlFor="">Giới tính</label>
                        <input className="register-radio" type="radio" value="Nam"/> Nam
                        <input className="register-radio" type="radio" value="Nữ"/> Nữ
                    </div>
                    <Info_input 
                        labelName = "CMND/CCCD"
                    />
                    <Info_input 
                        labelName = "Số điện thoại"
                    />
                    <Info_input 
                        labelName = "Email"
                    />
                    <Info_input 
                        labelName = "Địa chỉ"
                    />
                    <div className="button-container">
                        <Link to="/signup">
                            <button className="btn-reg back-btn">
                                <img src={back_icon} alt="" />
                                Quay lại
                            </button>
                        </Link>
                        <button className="btn-reg confirm-btn">
                            <img src={ok_icon} alt="" />
                            Xác nhận
                        </button>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}
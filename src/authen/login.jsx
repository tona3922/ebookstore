import React from "react";
import logo from "../img/logo.png";
// import login_icon from "../img/login-icon.png"
// import back_icon from "../img/back.png"
import "./login.css"


export const Login = () => {
    return(
        <div className="login-page">
            <div className="login-container">
                <header className="login-header">
                    <img className="login-logo" src={logo} alt="" />
                    <h1>ĐĂNG NHẬP</h1>
                </header>
                <div className="login-content">
                    <label className="login-label" htmlFor="">Tên đăng nhập</label>
                    <input className="login-input" type="text" placeholder="Tên đăng nhập"/>
                    <label className="login-label" htmlFor="">Mật khẩu</label>
                    <input className="login-input" type="text" placeholder="Mật khẩu"/>
                    <button className="btn">
                        {/* <img src={back_icon} alt="" /> */}
                        Quay lại
                    </button>
                    <button className="btn">
                        {/* <img src={login_icon} alt="" /> */}
                        Đăng nhập
                    </button>
                </div>
            </div>
        </div>   
    );
}




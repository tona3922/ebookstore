import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import login_icon from "../img/login-icon.png"
import back_icon from "../img/back.png"
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
                    <label className="login-label" htmlFor="username">Tên đăng nhập</label>
                    <input name="username" className="login-input" type="text" placeholder="Tên đăng nhập"/>
                    <label className="login-label" htmlFor="password">Mật khẩu</label>
                    <input name="password" className="login-input" type="password" placeholder="Mật khẩu"/>
                    <div className="button-container">
                        <Link to="/">
                            <button className="btn back-btn">
                                <img src={back_icon} alt="" />
                                Quay lại
                            </button>
                        </Link>
                        <button className="btn login-btn">
                            <img src={login_icon} alt="" />
                            Đăng nhập
                        </button>
                    </div>
                    <div className="login-text">
                        <p>Quên mật khẩu? <a href="#">Cập nhật mật khẩu</a></p>
                        <p>Chưa có tài khoản? <Link to="/signup">Đăng ký</Link></p>
                    </div>
                </div>
            </div>
        </div>   
    );
}




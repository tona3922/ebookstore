import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/home/logo.png";
import signup_icon from "../img/signup-icon.png";
import back_icon from "../img/back.png";
import "./signup.css";

export const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-container">
        <header className="signup-header">
          <img className="signup-logo" src={logo} alt="" />
          <h1>ĐĂNG KÝ</h1>
        </header>
        <div className="signup-content">
          <label className="signup-label" htmlFor="username">
            Tên đăng nhập
          </label>
          <input
            name="username"
            className="signup-input"
            type="text"
            placeholder="Tên đăng nhập"
          />
          <label className="signup-label" htmlFor="password">
            Mật khẩu
          </label>
          <input
            name="password"
            className="signup-input"
            type="password"
            placeholder="Mật khẩu"
          />
          <label className="signup-label" htmlFor="password">
            Xác nhận mật khẩu
          </label>
          <input
            name="password"
            className="signup-input"
            type="password"
            placeholder="Xác nhận mật khẩu"
          />
          <div className="button-container">
            <Link to="/">
              <button className="btn back-btn-signup">
                <img src={back_icon} alt="" />
                Quay lại
              </button>
            </Link>
            <Link to="/signup/info_reg">
              <button className="btn signup-btn">
                <img src={signup_icon} alt="" />
                Đăng ký
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

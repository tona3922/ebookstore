import React from "react";
import { Link, Navigate } from "react-router-dom";
import { InfoInput } from "./register_info";
import { useHistory } from "react";
import { account } from "../profile_management/profile_data";
import logo from "../img/home/logo.png";
import login_icon from "../img/login-icon.png";
import back_icon from "../img/back.png";
import ok_icon from "../img/button/ok.png";
import "./login.css";




function LoginProcess() {

  var form = document.getElementById("my-form");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);

  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if(username !== "" && password !== "") {
    let checkLogin = account.some(cur => cur.username === username && cur.password === password);
    if(checkLogin) {
      localStorage.setItem("accessToken",username);
    }
  }
  
}

export const Login = () => {
  const displayModal = () => {
    const modal = document.querySelector(".modal-pw");
    modal.classList.add("open");
  };
  const removeModal = () => {
    const modal = document.querySelector(".modal-pw.open");
    modal.classList.remove("open");
  };
  return (
    <div>
      <div className="login-page">
        <div className="login-container">
          <header className="login-header">
            <img className="login-logo" src={logo} alt="" />
            <h1>ĐĂNG NHẬP</h1>
          </header>
          <form id="my-form" className="login-content">
            <label className="login-label" htmlFor="username">
              Tên đăng nhập
            </label>
            <input
              name="username"
              id="username"
              className="login-input"
              type="text"
              placeholder="Tên đăng nhập"
              required
            />
            <label className="login-label" htmlFor="password">
              Mật khẩu
            </label>
            <input
              name="password"
              id="password"
              className="login-input"
              type="password"
              placeholder="Mật khẩu"
              required
            />
            <div className="button-container">
              <Link to="/">
                <button className="btn back-btn-login">
                  <img src={back_icon} alt="" />
                  Quay lại
                </button>
              </Link>
              <button className="btn login-btn" onClick={LoginProcess}  type="submit">
                <img src={login_icon} alt="" />
                Đăng nhập
              </button>
            </div>
            <div className="login-text">
              <p>
                Quên mật khẩu?{" "}
                <button onClick={displayModal} className="update-pw-btn">
                  Cập nhật mật khẩu
                </button>
              </p>
              <p>
                Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="modal-pw">
        <div className="modal-container">
          <header className="modal-header">
            <h1>CẬP NHẬT MẬT KHẨU</h1>
          </header>
          <div className="modal-content">
            <InfoInput labelName="Tên đăng nhập" type="text" />
            <InfoInput labelName="Mật khẩu mới" type="password" />
            <InfoInput labelName="Xác nhận mật khẩu mới" type="password" />
          </div>
          <div className="button-container">
            <button onClick={removeModal} className="btn back-btn-modal">
              <img src={back_icon} alt="" />
              Quay lại
            </button>
            <button className="btn confirm-btn">
              <img src={ok_icon} alt="" />
              Xác nhận
            </button>
          </div>
        </div>
      </div>

      {/* <div className="notification">
        <p>Tên đăng nhập hoặc mật khẩu không đúng!</p>
        <button>Nhập lại</button>
      </div> */}
    </div>
  );
};

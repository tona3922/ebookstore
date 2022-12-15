import React from "react";
import { Link, redirect } from "react-router-dom";
import { InfoInput } from "./register_info";
import { account } from "../profile_management/profile_data";
import logo from "../img/home/logo.png";
import login_icon from "../img/login-icon.png";
import back_icon from "../img/back.png";
import ok_icon from "../img/button/ok.png";
import close_icon from "../img/button/close_icon.png";
import email from "../img/profile/email.gif"
import "./login.css";

export const Login = () => {

  const  LoginProcess = function() {
    var form = document.getElementById("my-form");

    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);
  
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if(username !== "" && password !== "") {
      let checkLogin = account.some(cur => cur.username === username && cur.password === password);
      let curAcc = account.find(cur => localStorage.getItem("accessToken") === cur.username);
      if(checkLogin) {
        localStorage.setItem("accessToken",username);
        localStorage.setItem("role",curAcc.role)
        window.location.replace("/");
      }
      else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng");
      }
    }
  }
  const displayModal = () => {
    const modal = document.querySelector(".modal-pw");
    modal.classList.add("open");
  };
  const removeModal = () => {
    const modal = document.querySelector(".modal-pw.open");
    modal.classList.remove("open");
  };
  const displayModalstep2 = () => {
    const modal = document.querySelector(".modal-pw.open");
    const modalstep2 = document.querySelector(".modal-pw-step2");
    modal.classList.remove("open");
    modalstep2.classList.add("open");
  };
  const displayModalstep3 = () => {
    const modalstep2 = document.querySelector(".modal-pw-step2.open");
    const modalstep3 = document.querySelector(".modal-pw-step3");
    modalstep2.classList.remove("open");
    modalstep3.classList.add("open");
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
          </form>
            <div className="login-text">
              <p>
                Quên mật khẩu? {" "}
                <button onClick={displayModal} className="update-pw-btn">
                  Cập nhật mật khẩu
                </button>
              </p>
              <p>
                Chưa có tài khoản? <Link to="/signup">Đăng ký</Link>
              </p>
            </div>
        </div>
      </div>
      <div className="modal-pw">
        <div className="modal-container">
          <header className="modal-header">
            <h1>CẬP NHẬT MẬT KHẨU</h1>
          </header>
          <div className="modal-content">
            <InfoInput labelName="Tên đăng nhập" type="text" />
            <InfoInput labelName="Email/Số điện thoại" type="text" />
          </div>
          <div className="button-container">
            <button onClick={removeModal} className="btn back-btn-modal">
              <img src={back_icon} alt="" />
              Quay lại
            </button>
            <button className="btn confirm-btn" onClick={displayModalstep2}>
              <img src={ok_icon} alt="" />
              Xác nhận
            </button>
          </div>
        </div>
      </div>

      <div className="modal-pw-step2">
        <div className="modal-container">
          <div className="close-icon-container">
            <img src={close_icon} alt="" className="close-icon"
            onClick={()=>{document.querySelector(".modal-pw-step2.open").classList.remove("open")}}/>
          </div>
          <img src={email} alt="" style={{top:'10px'}}/>
          <div className="modal-content">
            <label htmlFor="pincode">Nhập mã xác nhận bao gồm 4 chữ số được gửi đến email/số điện thoại của bạn:</label>
            <input type="text" placeholder="****" name="pincode"/>
          </div>
          <button onClick={displayModalstep3}>
            Xác nhận
          </button>
        </div>
      </div>
      
      <div className="modal-pw-step3">
        <div className="modal-container">
          <div className="close-icon-container">
            <img src={close_icon} alt="" className="close-icon"
            onClick={()=>{document.querySelector(".modal-pw-step3.open").classList.remove("open")}}/>
          </div>
          <header className="modal-header">
            <h1>CẬP NHẬT MẬT KHẨU</h1>
          </header>
          <div className="modal-content">
            <InfoInput labelName="Nhập mật khẩu mới" type="password" />
            <InfoInput labelName="Nhập lại mật khẩu mới" type="password" />
          </div>
          <button onClick={displayModalstep3}>
            Xác nhận
          </button>
        </div>
      </div>
      {/* <div className="notification">
        <p>Tên đăng nhập hoặc mật khẩu không đúng!</p>
        <button>Nhập lại</button>
      </div> */}
    </div>
  );
};

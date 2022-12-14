import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { InfoInput } from "../authen/register_info";
import logo from "../img/home/logo.png";
import back_icon from "../img/back.png";
import profile_ava from "../img/profile/profile_ava.png";
import update_profile_icon from "../img/profile/update_profile_icon.png";
import change_password_icon from "../img/profile/change_password_icon.png";
import activity_icon from "../img/profile/activity_icon.png";
import ok_icon from "../img/button/ok.png";
import { profileInfo } from "./profile_data";
import "./profile.css";

let curAcc;

function Displayprofile (props) {
    return (
        <Fragment>
            <ul className="profile-content">
                <li>
                    <label htmlFor="">Họ và tên</label> 
                    <p>{props.name}</p>
                </li>
                <li>
                    <label htmlFor=""> Giới tính</label>
                    <p>{props.sex}</p>
                </li>
                <li>
                    <label htmlFor=""> Ngày sinh</label>
                    <p>{props.DoB}</p>
                </li>
                <li>
                    <label htmlFor=""> Email</label>
                    <p>{props.email}</p>
                </li>
                <li>
                    <label htmlFor=""> SĐT</label>
                    <p>{props.phonenumber}</p>
                </li>
                <li>
                    <label htmlFor=""> Địa chỉ</label>
                    <p>{props.address}</p>
                </li>
            </ul>
        </Fragment>
    )
}

function Displaysexoption () {
    if (curAcc.sex === "Nam"){
        return (
            <Fragment>
                <input className="register-radio" type="radio" value="Nam" name="sex" defaultChecked="checked"/> Nam
                <input className="register-radio" type="radio" value="Nữ" name="sex"/> Nữ
            </Fragment>
        )
    } 
    else {
        return (
            <Fragment>
                <input className="register-radio" type="radio" value="Nam" name="sex"/> Nam
                <input className="register-radio" type="radio" value="Nữ" name="sex" defaultChecked="checked"/> Nữ
            </Fragment>
        )
    }  
}

function DisplayActivityBtn () {
    if(localStorage.getItem("role") === "guest") {
        return (
            <Fragment>
                <Link to="/profile/activities">
                    <button className="profile-page-btn">
                        <img src={activity_icon} alt="" />
                        Xem hoạt động
                    </button>
                </Link>
            </Fragment>
        )
    }
};

export const Profile = () => {
    const displayModal = () => {
        const modal = document.querySelector(".modal-pw");
        modal.classList.add("open");
    };
    const removeModal = () => {
        const modal = document.querySelector(".modal-pw.open");
        modal.classList.remove("open");
    };
    const displayModalProfile = () => {
        const modal = document.querySelector(".modal-profile");
        modal.classList.add("open");
    };
    const removeModalProfile = () => {
        const modal = document.querySelector(".modal-profile.open");
        modal.classList.remove("open");
    };

    curAcc = profileInfo.find(cur => {return cur.username === localStorage.getItem("accessToken")});

    return(
        <Fragment>
            <div className="profile-page">
                <div className="profile-page-content">
                    <Link to="/">
                    <button className="btn back-btn-profile">
                        <img src={back_icon} alt="" />
                            Quay lại
                    </button>
                    </Link>
                    <img className="profile-logo" src={logo} alt="" />
                    
                    <div className="profile-container">
                        <div className="avatar-section">
                            <img className="ava-img" src={profile_ava} alt="" />
                            <h1 className="profile-name">{curAcc.name}</h1>
                            <button onClick={displayModalProfile} className="profile-page-btn">
                                <img src={update_profile_icon} alt="" />
                                Sửa hồ sơ
                            </button>
                            <button onClick={displayModal} className="profile-page-btn">
                                <img src={change_password_icon} alt="" />
                                Đổi mật khẩu
                            </button>
                            <DisplayActivityBtn />
                        </div>
                        
                        <div className="profile-content-section">
                            <h1>My Profile</h1>
                            <Displayprofile 
                                name = {curAcc.name}
                                sex = {curAcc.sex}
                                DoB = {curAcc.DoB}
                                email = {curAcc.email}
                                phonenumber = {curAcc.phonenumber}
                                address = {curAcc.address}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal-pw">
                <div className="modal-container">
                    <header className="modal-header">
                        <h1>ĐỔI MẬT KHẨU</h1>
                    </header>
                    <div className="modal-content">
                        <InfoInput labelName="Mật khẩu hiện tại" type="password" />
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

            <div className="modal-profile">
                <div className="modal-container">
                    <header className="modal-header">
                        <h1>SỬA HỒ SƠ</h1>
                    </header>
                    <div className="modal-content">
                    <InfoInput labelName = "Họ và tên" type = "text" defaultVal = {curAcc.name}/>
                    <div className="sex-option">
                        <label className="register-label" htmlFor="" defaultValue={curAcc.sex}>Giới tính</label>
                        <Displaysexoption />
                        {/* <input className="register-radio" type="radio" value="Nam" name="sex"/> Nam
                        <input className="register-radio" type="radio" value="Nữ" name="sex"/> Nữ */}
                    </div>
                    <InfoInput labelName = "Ngày sinh" type = "date" defaultVal = {curAcc.DoB}/>
                    <InfoInput labelName = "Số điện thoại" type = "text" defaultVal = {curAcc.phonenumber}/>
                    <InfoInput labelName = "Email" type = "text" defaultVal = {curAcc.email}/>
                    <InfoInput labelName = "Địa chỉ" type = "text" defaultVal = {curAcc.address}/>
                    </div>
                    <div className="button-container">
                        <button onClick={removeModalProfile} className="btn back-btn-modal">
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
        </Fragment>
    )
}
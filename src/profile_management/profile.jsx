import React, { Fragment } from "react";
import logo from "../img/home/logo.png";
import back_icon from "../img/back.png";
import profile_ava from "../img/profile/profile_ava.png";
import update_profile_icon from "../img/profile/update_profile_icon.png";
import change_password_icon from "../img/profile/change_password_icon.png";
import activity_icon from "../img/profile/activity_icon.png";
import profileInfo from "./account_info";
import "./profile.css";

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


export const Profile = () => {
    return(
        <div>
            <div className="profile-page">
                <div className="profile-page-content">
                    <button className="btn back-btn-profile">
                        <img src={back_icon} alt="" />
                            Quay lại
                    </button>
                    <img className="profile-logo" src={logo} alt="" />
                    
                    <div className="profile-container">
                        <div className="avatar-section">
                            <img className="ava-img" src={profile_ava} alt="" />
                            <h1 className="profile-name">{profileInfo.name}</h1>
                            <button className="profile-page-btn">
                                <img src={update_profile_icon} alt="" />
                                Sửa hồ sơ
                            </button>
                            <button className="profile-page-btn">
                                <img src={change_password_icon} alt="" />
                                Đổi mật khẩu
                            </button>
                            <button className="profile-page-btn">
                                <img src={activity_icon} alt="" />
                                Xem hoạt động
                            </button>
                        </div>
                        
                        <div className="profile-content-section">
                            <h1>My Profile</h1>
                            <Displayprofile 
                                name = {profileInfo.name}
                                sex = {profileInfo.sex}
                                DoB = {profileInfo.DoB}
                                email = {profileInfo.email}
                                phonenumber = {profileInfo.phonenumber}
                                address = {profileInfo.address}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
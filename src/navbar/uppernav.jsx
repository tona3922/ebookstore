import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import home from "../img/navbar/home.png";
import contact from "../img/navbar/contact.png";
import cart from "../img/navbar/cart.png";
import signin from "../img/navbar/signin.png";
import signup from "../img/navbar/signup.png";
import { profileInfo } from "../profile_management/profile_data";
import profile_ava from "../img/profile/profile_ava.png"
import down_arrow from "../img/button/down-arrow.png";
import admin_icon from "../img/navbar/admin_icon.png";
import manager_icon from "../img/navbar/manager_icon.png";
import "./nav.css";


function DisplayRightNav () {
  const handleSubnav = () => {
    if(document.querySelector(".sub-nav.add") !== null) {
      document.querySelector(".sub-nav.add").classList.remove("add");
    }
    else {
      document.querySelector(".sub-nav").classList.add("add");
    }
  }

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    window.location.replace("/");
  }

  if(!localStorage.getItem("accessToken")){
    return(
      <Fragment>
        <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={cart} alt="" />
              &nbsp;Giỏ hàng
            </div>
        </Link>
        <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
          <div className="navbutton">
              <img class="navimg" src={signup} alt="" />
              &nbsp;Đăng ký
          </div>
        </Link>
        <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={signin} alt="" />
              &nbsp;Đăng nhập
            </div>
        </Link>
      </Fragment>
    )
  }
  else {
    let curAcc = profileInfo.find(cur => {return cur.username === localStorage.getItem("accessToken")});

    if(localStorage.getItem("role") === "guest") {
      return (
        <Fragment>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" , lineHeight: "55px", marginLeft: "45px"}}>
              <div className="navbutton">
                <img class="navimg" src={cart} alt="" style={{lineHeight: '100%' }}/>
                &nbsp;Giỏ hàng
              </div>
          </Link>
          <div onClick={handleSubnav} className="navbutton" style={{ textDecoration: "none", color: "black" , lineHeight: "55px"}}>
            <img class="nav-ava" src={profile_ava} alt="" />
            &nbsp;{curAcc.name}
            <img src={down_arrow} alt="" style={{width: "10px", marginLeft: "8px"}}/>
            <ul className="sub-nav">
              <Link to="/profile"><li>Xem hồ sơ</li></Link>
              <Link to="/profile/activities"><li>Xem hoạt động</li></Link>
              <li onClick={logout}>Đăng xuất</li>
            </ul>
          </div>
        </Fragment>
      )
    }
    else if(localStorage.getItem("role") === "admin") {
      return (
        <Fragment>
          <Link to="/admin/*" style={{ textDecoration: "none", color: "black" , lineHeight: "55px", marginLeft: "45px"}}>
              <div className="navbutton">
                <img class="navimg" src={admin_icon} alt="" style={{lineHeight: '100%' , width: "30px"}}/>
                &nbsp;Admin
              </div>
          </Link>
          <div onClick={handleSubnav} className="navbutton" style={{ textDecoration: "none", color: "black" , lineHeight: "55px"}}>
            <img class="nav-ava" src={profile_ava} alt="" />
            &nbsp;{curAcc.name}
            <img src={down_arrow} alt="" style={{width: "10px", marginLeft: "8px"}}/>
            <ul className="sub-nav">
              <Link to="/profile"><li>Xem hồ sơ</li></Link>
              <li onClick={logout}>Đăng xuất</li>
            </ul>
          </div>
        </Fragment>
      )
    }
    else{
      return (
        <Fragment>
          <Link to="/manager/*" style={{ textDecoration: "none", color: "black" , lineHeight: "55px", marginLeft: "45px"}}>
              <div className="navbutton">
                <img class="navimg" src={manager_icon} alt="" style={{lineHeight: '100%' , width: "24px"}}/>
                &nbsp;Quản lý
              </div>
          </Link>
          <div onClick={handleSubnav} className="navbutton" style={{ textDecoration: "none", color: "black" , lineHeight: "55px"}}>
            <img class="nav-ava" src={profile_ava} alt="" />
            &nbsp;{curAcc.name}
            <img src={down_arrow} alt="" style={{width: "10px", marginLeft: "8px"}}/>
            <ul className="sub-nav">
              <Link to="/profile"><li>Xem hồ sơ</li></Link>
              <li onClick={logout}>Đăng xuất</li>
            </ul>
          </div>
        </Fragment>
      )
    }
  } 
}

export const Uppernav = () => {


  return (
    <div className="upperNav">
      <nav>
        <div className="Left">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={home} alt="" />
              &nbsp; Trang chủ
            </div>
          </Link>
          {/* <Link to="/" style={{ textDecoration: "none", color: "black" }}> */}
          <a href="#footer" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={contact} alt="" />
              &nbsp;Liên hệ
            </div>
          </a>
          {/* </Link> */}
        </div>
        <div className="Right">
          <DisplayRightNav />
        </div>
      </nav>
    </div>
  );
};

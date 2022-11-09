import React from "react";
import logo from "../../img/logo.png";
import facebook from "../../img/facebook.png";
import instagram from "../../img/instagram.png";
import twitter from "../../img/twitter.png";
import mail from "../../img/mail.png";
import phone from "../../img/phone.png";
import location from "../../img/location.png";
import momo from "../../img/momo.png";
import bank from "../../img/bank.png";

// import "../../navbar/nav.css";
import "./home.css";

export const Home = () => {
  return (
    <div className="homepage">
      <div className="introHome">
        <img src={logo} alt="#" />
        <a href="#topbook">
          <button class="normbutton">Top Books</button>
        </a>
        <a href="#viewbook">
          <button class="normbutton">View Books</button>
        </a>

        <button class="category">Category</button>
        <div class="searchButton">
          <input type="text" placeholder="Search here" />
          <button class="search">Search</button>
        </div>
      </div>
      <div className="sliderIntro">jjjjj</div>
      <hr></hr>
      <div id="topbook" className="topbook">
        afaf
      </div>
      <hr></hr>
      <div id="viewbook" className="viewbook">
        asfas
      </div>
      <hr></hr>
      <div className="footer">
        <div className="footerLeft">
          <img class="imgfootleft" src={logo} alt="#" />
          <div className="notice">
            <p>MyBookstore nhận đặt hàng trực tuyến và giao hàng tận nơi.</p>
            <p>KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.</p>
          </div>
          <div className="media">
            <img class="imgmedia" src={facebook} alt="#" />
            <img class="imgmedia" src={instagram} alt="#" />
            <img class="imgmedia" src={twitter} alt="#" />
          </div>
        </div>
        <div className="footerRight">
          <p className="footrightTitle">Contact</p>
          <div className="contact">
            <div className="contactinfo">
              <img class="info" src={location} alt="" />
              &nbsp; abcxyz
            </div>
            <div className="contactinfo">
              <img class="info" src={phone} alt="" />
              &nbsp; abcxyz
            </div>
            <div className="contactinfo">
              <img class="info" src={mail} alt="" />
              &nbsp; abcxyz
            </div>
          </div>
          <p className="footrightTitle">Online payment</p>
          <div className="onlinepay">
            <img class="onlinepayicon" src={momo} alt="" />
            <img class="onlinepayicon" src={bank} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

import { React, useState, useReducer } from "react";
import logo from "../../img/home/logo.png";
import facebook from "../../img/home/facebook.png";
import instagram from "../../img/home/instagram.png";
import twitter from "../../img/home/twitter.png";
import mail from "../../img/home/mail.png";
import phone from "../../img/home/phone.png";
import location from "../../img/home/location.png";
import momo from "../../img/home/momo.png";
import bank from "../../img/home/bank.png";
import slider1 from "../../img/home/slider1.gif";
import slider2 from "../../img/home/slider2.png";
import slider3 from "../../img/home/slider3.png";
import slider4 from "../../img/home/slider4.png";
import slider5 from "../../img/home/slider5.png";
import prev_btn from "../../img/button/prev_btn.png";
import next_btn from "../../img/button/next_btn.png";
import { Viewbook } from "./viewbook";
import { Uppernav } from "../uppernav";
import { Topbook } from "./topbook";
import { useNavigate, Link } from "react-router-dom";
import "./home.css";

var index = 0;
var slideDirection = 0;
let timeout;

const increaseImage = function () {
  var imageList = document.querySelectorAll(".image-slider");
  var imageBtn = document.querySelectorAll(".manual-btn");
  var l = imageList.length;

  for (var i = 0; i < l; i++) {
    if (imageList[i].checked === true) {
      index = i;
      break;
    }
  }

  imageBtn[index].classList.remove("display");

  if (index === l - 1) {
    index = index - 1;
    slideDirection = 1;
  } else {
    index = index + 1;
  }
  imageList[index].checked = true;
  imageBtn[index].classList.add("display");
  timeout = setTimeout(displaySlider, 8000);
};

const decreaseImage = function () {
  var imageList = document.querySelectorAll(".image-slider");
  var imageBtn = document.querySelectorAll(".manual-btn");
  var l = imageList.length;

  for (var i = 0; i < l; i++) {
    if (imageList[i].checked === true) {
      index = i;
      break;
    }
  }

  imageBtn[index].classList.remove("display");

  if (index === 0) {
    index = index + 1;
    slideDirection = 0;
  } else {
    index = index - 1;
  }
  imageList[index].checked = true;
  imageBtn[index].classList.add("display");
  timeout = setTimeout(displaySlider, 8000);
};

var displaySlider = function () {
  if (slideDirection === 0) {
    increaseImage();
  } else {
    decreaseImage();
  }
};

var handleClickOption = function () {
  clearTimeout(timeout);
  var imageList = document.querySelectorAll(".image-slider");
  var imageBtn = document.querySelectorAll(".manual-btn");
  var l = imageList.length;

  imageBtn[index].classList.remove("display");

  for (var i = 0; i < l; i++) {
    console.log(imageList[i].checked);
    if (imageList[i].checked === true) {
      index = i;
    }
  }

  imageBtn[index].classList.add("display");
  setTimeout(displaySlider, 10000);
};

timeout = setTimeout(displaySlider, 8000);

export const Home = (props) => {
  const { cartItems, onDecrease, onIncrease } = props;
  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }

  // let input = "";
  const [input, setInput] = useState("");

  return (
    <div className="homepage">
      <Uppernav />
      <div className="introHome">
        <img src={logo} alt="#" />
        <a href="#topbook">
          <button class="normbutton">Top Books</button>
        </a>
        <a href="#viewbook">
          <button class="normbutton">View Books</button>
        </a>
        <button class="category">
          <select onChange={(event) => handleChange(event.target.value)}>
            <option value="home">Category</option>
            <option value="science">Science</option>
            <option value="novel">Novel</option>
            <option value="fiction">Fiction</option>
            <option value="adventure">Adventure</option>
            <option value="comic">Comic</option>
          </select>
        </button>
        <div class="searchButton">
          <input
            type="text"
            placeholder="Search here"
            value={input}
            onInput={(e) => setInput(e.target.value)}
          />
          <button class="search" onClick={ handleClick }>
            <Link
              to="/search"
              style={{ textDecoration: "none", color: "black" }}
              state={{ string: input }}
            >
              Search
            </Link>
          </button>
        </div>
      </div>
      <div className="slider">
        <img
          onClick={() => {
            clearTimeout(timeout);
            decreaseImage();
          }}
          className="direct-btn prev-btn"
          src={prev_btn}
          alt=""
        />
        <img
          onClick={() => {
            clearTimeout(timeout);
            increaseImage();
          }}
          className="direct-btn next-btn"
          src={next_btn}
          alt=""
        />
        <div className="slides">
          <input
            onClick={handleClickOption}
            type="radio"
            id="radio1"
            className="image-slider"
            name="radio-btn"
            defaultChecked="checked"
          />
          <input
            onClick={handleClickOption}
            type="radio"
            id="radio2"
            className="image-slider"
            name="radio-btn"
          />
          <input
            onClick={handleClickOption}
            type="radio"
            id="radio3"
            className="image-slider"
            name="radio-btn"
          />
          <input
            onClick={handleClickOption}
            type="radio"
            id="radio4"
            className="image-slider"
            name="radio-btn"
          />
          <input
            onClick={handleClickOption}
            type="radio"
            id="radio5"
            className="image-slider"
            name="radio-btn"
          />
          <div className="slide first">
            <img src={slider2} alt="" />
          </div>
          <div className="slide">
            <img src={slider1} alt="" />
          </div>
          <div className="slide">
            <img src={slider3} alt="" />
          </div>
          <div className="slide">
            <img src={slider4} alt="" />
          </div>
          <div className="slide">
            <img src={slider5} alt="" />
          </div>
        </div>
        <div className="navigation-manual">
          <label htmlFor="radio1" className="manual-btn display"></label>
          <label htmlFor="radio2" className="manual-btn"></label>
          <label htmlFor="radio3" className="manual-btn"></label>
          <label htmlFor="radio4" className="manual-btn"></label>
          <label htmlFor="radio5" className="manual-btn"></label>
        </div>
      </div>
      <hr></hr>
      <div id="topbook" className="topbook">
        <Topbook
          cartItems={cartItems}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </div>
      <hr></hr>
      <div id="viewbook" className="viewbook">
        <Viewbook 
          cartItems={cartItems}
          onDecrease={onDecrease}
          onIncrease={onIncrease}        
        />
      </div>
      <hr></hr>
      <div id="footer" className="footer">
        <div className="footerLeft">
          <img class="imgfootleft" src={logo} alt="#" />
          <div className="notice">
            <p>MyBookstore nhận đặt hàng trực tuyến và giao hàng tận nơi.</p>
            <p>KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.</p>
          </div>
          <div className="media">
            <a href="https://www.facebook.com/">
              <img class="imgmedia" src={facebook} alt="#" />
            </a>
            <a href="https://www.instagram.com/">
              <img class="imgmedia" src={instagram} alt="#" />
            </a>
            <a href="https://twitter.com/">
              <img class="imgmedia" src={twitter} alt="#" />
            </a>
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
              &nbsp; 0909090909
            </div>
            <div className="contactinfo">
              <img class="info" src={mail} alt="" />
              &nbsp; abcxyz@gmail.com
            </div>
          </div>
          <p className="footrightTitle">Online payment</p>
          <div className="onlinepay">
            <a href="https://momo.vn/">
              <img class="onlinepayicon" src={momo} alt="" />
            </a>
            <a href="https://ocb.com.vn/vi/ca-nhan">
              <img class="onlinepayicon" src={bank} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

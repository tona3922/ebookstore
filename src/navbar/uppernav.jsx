import React from "react";
import { Link } from "react-router-dom";
// import { FaHome, FaShoppingCart, FaSignInAlt } from "react-icons/fa";
// import { AiFillContacts } from "react-icons/ai";
// import { GoSignIn } from "react-icons/go";
import home from "../img/home.png";
import contact from "../img/contact.png";
import cart from "../img/cart.png";
import signin from "../img/signin.png";
import signup from "../img/signup.png";
import "./nav.css";

export const Uppernav = () => {
  return (
    <div className="upperNav">
      <nav>
        <div className="Left">
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            {/* <FaHome /> */}
            <div className="navbutton">
              <img class="navimg" src={home} alt="" />
              &nbsp; Home
            </div>
          </Link>
          <Link
            to="/contact"
            style={{ textDecoration: "none", color: "black" }}
          >
            <div className="navbutton">
              <img class="navimg" src={contact} alt="" />
              &nbsp;Contact
            </div>
          </Link>
        </div>
        <div className="Right">
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            {/* <FaShoppingCart /> */}
            <div className="navbutton">
              <img class="navimg" src={cart} alt="" />
              &nbsp;Cart
            </div>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
            {/* <FaSignInAlt /> */}
            <div className="navbutton">
              <img class="navimg" src={signup} alt="" />
              &nbsp;Sign Up
            </div>
          </Link>
          <Link to="/signin" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={signin} alt="" />
              &nbsp;Sign In
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

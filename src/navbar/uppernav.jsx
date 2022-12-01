import React from "react";
import { Link } from "react-router-dom";
import home from "../img/navbar/home.png";
import contact from "../img/navbar/contact.png";
import cart from "../img/navbar/cart.png";
import signin from "../img/navbar/signin.png";
import signup from "../img/navbar/signup.png";
import "./nav.css";

export const Uppernav = () => {
  return (
    <div className="upperNav">
      <nav>
        <div className="Left">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
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
            <div className="navbutton">
              <img class="navimg" src={cart} alt="" />
              &nbsp;Cart
            </div>
          </Link>
          <Link to="/signup" style={{ textDecoration: "none", color: "black" }}>
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

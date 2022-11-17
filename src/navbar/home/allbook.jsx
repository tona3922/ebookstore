// import { FaShoppingBag, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./viewbook.css";
import "./allbook.css";
import React, { Component } from "react";
import Products from "./products";
import home from "../../img/navbar/home.png";
import cart from "../../img/navbar/cart.png";

export class AllBook extends Component {
  render() {
    return (
      <div id="product">
        <div className="allbooknav">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={home} alt="" />
              &nbsp; Home
            </div>
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <div className="navbutton">
              <img class="navimg" src={cart} alt="" />
              &nbsp;Cart
            </div>
          </Link>
        </div>
        <div className="viewbooktitle">View all book</div>
        <div>
          <Products />
        </div>
      </div>
    );
  }
}

export default AllBook;

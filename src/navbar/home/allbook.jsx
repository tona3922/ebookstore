// import { FaShoppingBag, FaBook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./viewbook.css";
import "./allbook.css";
import React from "react";
import { Products } from "./products";
import home from "../../img/navbar/home.png";
import cart from "../../img/navbar/cart.png";

export const AllBook = (props) => {
  const { cartItems, onDecrease, onIncrease } = props;
  let navigate = useNavigate();
  function handleChange(value) {
    navigate(`${value}`);
    value = "";
  }
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
      <button class="sort_category">
        <select onChange={(event) => handleChange(event.target.value)}>
          <option value="allbook">A-Z</option>
          <option value="Htl">Highest to lowest</option>
          <option value="Lth">Lowest to highest</option>
        </select>
      </button>
      <div>
        <Products
          cartItems={cartItems}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />
      </div>
    </div>
  );
};

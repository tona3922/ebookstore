import React, { useReducer } from "react";
import { FaShoppingBag, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";
import Data from "./data.json";
import "./viewbook.css";

export const Viewbook = () => {
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }
  const products = Data.products;
  var array = [];
  for (let i = 0; i < 8; i++) {
    array.push(
      <div className="card">
        <div className="uppercard">
          <div className="bookimg">
            <img src={products[i].image} alt="" />
          </div>
          <div className="bookinfo">
            <em>{products[i].title}</em>
            <span>{products[i].author}</span>
            <span>Giá: {products[i].price}</span>
            <p>Kho : {products[i].count}</p>
          </div>
        </div>
        <div className="downcard">
          <button className="shopping-bag">
            Add to cart <FaShoppingBag />
          </button>
          <button className="review">
            <Link
              to={{
                pathname: "/review/" + products[i]._id,
              }}
              style={{ textDecoration: "none", color: "white" }}
              state={{ index: products[i]._id }}
            >
              review <FaBook />
            </Link>
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="viewbooktitle">View Books</div>
      <div className="container">{array}</div>
      <Link
        to="/allbook"
        style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}
      >
        <div className="toallbook" onClick={{ handleClick }}>
          <span>&#8611;</span>&nbsp; View all book here
        </div>
      </Link>
    </div>
  );
};

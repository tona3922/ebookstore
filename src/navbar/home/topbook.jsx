import React from "react";
import "./topbook.scss";
import Data from "./data.json";
import { FaShoppingBag, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Topbook = (props) => {
  const {cartItems, onDecrease, onIncrease} = props
  const array = Data.products,
    final = [];
  function compare(a, b) {
    if (a.count < b.count) {
      return -1;
    }
    if (a.count > b.count) {
      return 1;
    }
    return 0;
  }
  array.sort(compare);
  array.reverse();
  for (let i = 0; i < array.length && i < 5; i++) {
    final.push(array[i]);
  }
  return (
    <div>
      <div className="topbooktitle">Top Books</div>
      <div className="container">
        {final.map((fins) => (
          <div className="card">
            <div className="uppercard">
              <div className="bookimg">
                <img src={fins.image} alt="" />
              </div>
              <div className="bookinfo">
                <em>{fins.title}</em>
                <span>{fins.author}</span>
                <span>price: ${fins.price}</span>
                <p>available : {fins.count}</p>
              </div>
            </div>
            <div className="downcard">
              <button className="shopping-bag" onClick={() => onIncrease(fins)}>
                Add to cart <FaShoppingBag />
              </button>
              <button className="review">
                <Link
                  to={{
                    pathname: "/review/" + fins._id,
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                  state={{ index: fins._id }}
                >
                  review <FaBook />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

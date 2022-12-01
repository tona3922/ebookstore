import React from "react";
import "./topbook.scss";
import Data from "./data.json";
import { FaShoppingBag, FaBook } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Topbook = (props) => {
  const { cartItems, onDecrease, onIncrease } = props;
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
  var pusharray = [],
    pusharray2 = [];
  function pushproduct(start, end, funct) {
    for (let i = start; i <= end; i++) {
      funct.push(
        <div className="topcard">
          <div className="uppercard">
            <div className="topnum">#{i + 1}</div>
            <div className="bookimg">
              <img src={final[i].image} alt="" />
            </div>
            <div className="bookinfo">
              <em>{final[i].title}</em>
              <span>{final[i].author}</span>
              <span>price: ${final[i].price}</span>
              <p>available : {final[i].count}</p>
            </div>
          </div>
          <div className="downcard">
            <button
              className="shopping-bag"
              onClick={() => onIncrease(final[i])}
            >
              Add to cart <FaShoppingBag />
            </button>
            <button className="review">
              <Link
                to={{
                  pathname: "/review/" + final[i]._id,
                }}
                style={{ textDecoration: "none", color: "white" }}
                state={{ index: final[i]._id }}
              >
                review <FaBook />
              </Link>
            </button>
          </div>
        </div>
      );
    }
  }
  pushproduct(0, 1, pusharray);
  pushproduct(2, 4, pusharray2);
  return (
    <div>
      <div className="topbooktitle">Top Books</div>
      <div className="top1to2">{pusharray}</div>
      <div className="top3to5">{pusharray2}</div>
      {/* <div className="top1n2">
        <div className="card">
          <div className="uppercard">
            <div className="bookimg">
              <img src={final[0].image} alt="" />
            </div>
            <div className="bookinfo">
              <em>{final[0].title}</em>
              <span>{final[0].author}</span>
              <span>price: ${final[0].price}</span>
              <p>available : {final[0].count}</p>
            </div>
          </div>
          <div className="downcard">
            <button
              className="shopping-bag"
              onClick={() => onIncrease(final[0])}
            >
              Add to cart <FaShoppingBag />
            </button>
            <button className="review">
              <Link
                to={{
                  pathname: "/review/" + final[0]._id,
                }}
                style={{ textDecoration: "none", color: "white" }}
                state={{ index: final[0]._id }}
              >
                review <FaBook />
              </Link>
            </button>
          </div>
        </div>
        <div className="card">
          <div className="uppercard">
            <div className="bookimg">
              <img src={final[1].image} alt="" />
            </div>
            <div className="bookinfo">
              <em>{final[1].title}</em>
              <span>{final[1].author}</span>
              <span>price: ${final[1].price}</span>
              <p>available : {final[1].count}</p>
            </div>
          </div>
          <div className="downcard">
            <button
              className="shopping-bag"
              onClick={() => onIncrease(final[1])}
            >
              Add to cart <FaShoppingBag />
            </button>
            <button className="review">
              <Link
                to={{
                  pathname: "/review/" + final[1]._id,
                }}
                style={{ textDecoration: "none", color: "white" }}
                state={{ index: final[1]._id }}
              >
                review <FaBook />
              </Link>
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

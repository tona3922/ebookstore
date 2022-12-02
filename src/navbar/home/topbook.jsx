import React, { useReducer } from "react";
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
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  function handleClick() {
    forceUpdate();
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
              <span>Giá: {final[i].price}</span>
              <p>Kho : {final[i].count}</p>
            </div>
          </div>
          <div className="downcard">
            <button
              className="shopping-bag"
              onClick={() => onIncrease(final[i])}
            >
              Add to cart <FaShoppingBag />
            </button>
            <button
              className="review"
              onClick={() => {
                window.location.reload();
              }}
            >
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
    </div>
  );
};

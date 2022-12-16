import React from "react";
import { FaBook } from "react-icons/fa";
import "../viewbook.css";
import { Link } from "react-router-dom";
import cart from "../../../img/navbar/cart.png";
import Data from "../data.json";
import AddButton from "../AddButton";

export const Htlnovel = (props) => {
  const { cartItems, onDecrease, onIncrease } = props;
  const final = [...Data.products];
  const products = [];
  let i = 0;
  for (i in final) {
    if (final[i].genre === "novel") {
      products.push(final[i]);
    }
  }
  function compare(a, b) {
    if (a.price < b.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  }
  products.sort(compare);
  products.reverse();
  return (
    <div>
      <div className="genretitle">
        <div className="covertitle">
          <div className="backgenre">
            <Link
              to="/novel"
              style={{ textDecoration: "none", color: "black", fontSize: "28" }}
            >
              {" "}
              <button>
                <span>&#8610;</span>Back
              </button>
            </Link>
          </div>
        </div>
        <div className="centertitle">
          <div className="titlegenre">Price: High to low</div>
        </div>
        <div className="covertitle">
          <div className="cartgenre">
            <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
              <div>
                <img class="navimg" src={cart} alt="" />
                &nbsp;Cart
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">
        {products.map((product) => (
          <div className="card">
            <div className="uppercard">
              <div className="bookimg">
                <img src={product.image} alt="" />
              </div>
              <div className="bookinfo">
                <em>{product.title}</em>
                <span>{product.author}</span>
                <span>Giá: {product.price}</span>
                <p>Kho: {product.count}</p>
              </div>
            </div>
            <div className="downcard">
              <AddButton
                cartItems={cartItems}
                onDecrease={onDecrease}
                onIncrease={onIncrease}
                product={product}
              />
              <button className="review">
                <Link
                  to={{
                    pathname: "/review/" + product._id,
                  }}
                  style={{ textDecoration: "none", color: "white" }}
                  state={{ index: product._id }}
                >
                  Review <FaBook />
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

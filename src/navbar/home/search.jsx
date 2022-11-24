import React from "react";
import { useLocation, Link } from "react-router-dom";
import { FaShoppingBag, FaBook } from "react-icons/fa";
import Data from "./data.json";
import cart from "../../img/navbar/cart.png";
export const Search = () => {
  const location = useLocation();
  const idx = location.state.string;
  const products = Data.products;
  const final = [];
  let i = 0;
  for (i in products) {
    if (products[i].author.includes(idx) || products[i].title.includes(idx)) {
      final.push(products[i]);
    }
  }
  return (
    <div>
      <div className="genretitle">
        <div className="covertitle">
          <div className="backgenre">
            <Link
              to="/"
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
          <div className="titlegenre">Results for "{idx}"</div>
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
      {(() => {
        if (final.length === 0) {
          return (
            <div className="genrealert">
              Sorry there is no results for "{idx}". Please try another one
            </div>
          );
        }
        return (
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
                  <button className="shopping-bag">
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
        );
      })()}
    </div>
  );
};

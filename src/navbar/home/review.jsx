import React from "react";
import Data from "./data.json";
import { FaShoppingBag } from "react-icons/fa";
import "./review.scss";
import { Link, useLocation } from "react-router-dom";

export const Review = () => {
  const location = useLocation();
  const idx = location.state.index;
  // console.log(idx);
  const product = Data.products[idx - 1];
  return (
    <div className="reviewpage">
      <Link
        to="/allbook"
        style={{ textDecoration: "none", color: "black", fontSize: "28" }}
      >
        {" "}
        <button className="backbutton">
          <span>&#8610;</span>Back
        </button>
      </Link>

      <div className="reviewbook">
        <div className="title">Details</div>
        <div className="detail">
          <div className="left">
            <img src={product.image} alt="" />
            <button className="shopping-bag">
              Add to cart <FaShoppingBag />
            </button>
            <button className="feedback">Feedback</button>
          </div>
          <div className="right">
            <h1>{product.title}</h1>
            <h2>
              Author :{" "}
              <em>
                <b>{product.author}</b>
              </em>
            </h2>
            <h2 style={{ color: "red" }}>Price : ${product.price}</h2>
            <h2>Genre : {product.genre}</h2>
            <h2>Content</h2>
            <p>{product.content}</p>
            <h2>Desciption</h2>
            <p>
              <em>Available : </em>
              {product.count}
            </p>
            <p>
              <b>More :</b> {product.description}
            </p>
            <p>
              <b>Page :</b> {product.pages}
            </p>
            <p>
              <b>Language :</b> {product.language}
            </p>
            <p>
              <b>Publisher :</b> {product.publisher}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

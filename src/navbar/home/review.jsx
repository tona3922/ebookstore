import React from "react";
import Data from "./data.json";
import { FaShoppingBag } from "react-icons/fa";
import "./review.scss";
import { Link, useLocation } from "react-router-dom";
import home from "../../img/navbar/home.png";

export const Review = () => {
  const location = useLocation();
  const idx = location.state.index;
  const product = Data.products[idx - 1];
  return (
    <div className="reviewpage">
      <Link
        to="/allbook"
        style={{ textDecoration: "none", color: "black", fontSize: "28" }}
      >
        {" "}
        <button className="backbutton">
          <span>&#8610;</span>All Book
        </button>
      </Link>
      <Link
        to="/"
        style={{ textDecoration: "none", color: "black", fontSize: "28" }}
      >
        {" "}
        <button className="backbutton2">
          <span>&#8610;</span>
          <img class="navimg" src={home} alt="" />
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
            <button className="feedback">
              <Link
                to={{
                  pathname: "/feedback/" + product._id,
                }}
                style={{ textDecoration: "none", color: "black" }}
                state={{ index: product._id }}
              >
                Feedback
              </Link>
            </button>
          </div>
          <div className="right">
            <h1>{product.title}</h1>
            <h2>
              Tác Giả :{" "}
              <em>
                <b>{product.author}</b>
              </em>
            </h2>
            <h2 style={{ color: "red" }}>Giá : {product.price}</h2>
            <h2>Thể loại : {product.genre}</h2>
            <h2>Nội dung</h2>
            <p>{product.content}</p>
            <h2>Mô tả</h2>
            <p>
              <em>Kho : </em>
              {product.count}
            </p>
            <p>
              <b>Thông tin thêm :</b> {product.description}
            </p>
            <p>
              <b>Số Trang :</b> {product.pages}
            </p>
            <p>
              <b>Ngôn ngữ:</b> {product.language}
            </p>
            <p>
              <b>Nhà xuất bản :</b> {product.publisher}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

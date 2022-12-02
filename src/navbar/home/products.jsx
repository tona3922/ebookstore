import React from "react";
import { FaShoppingBag, FaBook } from "react-icons/fa";
import "./viewbook.css";
import { Link } from "react-router-dom";
import Data from "./data.json";

export const Products = () => {
  const products = Data.products;
  return (
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
              <p>Kho : {product.count}</p>
            </div>
          </div>
          <div className="downcard">
            <button className="shopping-bag">
              Add to cart <FaShoppingBag />
            </button>
            <button className="review">
              <Link
                to={{
                  pathname: "/review/" + product._id,
                }}
                style={{ textDecoration: "none", color: "white" }}
                state={{ index: product._id }}
              >
                review <FaBook />
              </Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
// export default Products;

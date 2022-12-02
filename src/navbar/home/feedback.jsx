import React from "react";
import Data from "./data.json";
import { useLocation, Link } from "react-router-dom";
import "./feedback.scss";
import { Rating } from "@mui/material";

export const Feedback = () => {
  const location = useLocation();
  const idx = location.state.index;
  const product = Data.products[idx - 1];
  return (
    <div>
      <Link
        to={{
          pathname: "/review/" + product._id,
        }}
        style={{ textDecoration: "none", color: "black" }}
        state={{ index: product._id }}
      >
        {" "}
        <button className="backbutton">
          <span>&#8610;</span>Go Back
        </button>
      </Link>
      <div className="feedbackcontainer">
        {product.feedbacks.map((feeds) => (
          <div className="feedbackpersonal">
            <div className="feedinfo">
              <div className="feedname">{feeds.name}</div>
              <img src={feeds.img} alt="#" />
            </div>
            <div>
              <Rating name="size-medium" defaultValue={feeds.rating} readOnly />
            </div>
            <div className="feedcomment">{feeds.comment}</div>
          </div>
        ))}
      </div>
      <div className="yourfeedback">
        <Rating name="size-medium" defaultValue={0} />
        <input type="text" />
        <button>Post</button>
      </div>
    </div>
  );
};

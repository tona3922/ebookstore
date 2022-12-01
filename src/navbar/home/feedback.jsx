import React from "react";
import Data from "./data.json";
import { useLocation } from "react-router-dom";

export const Feedback = () => {
  const location = useLocation();
  const idx = location.state.index;
  const product = Data.products[idx - 1];
  return (
    <div>
      <div>{product._id}</div>
      <div>{product.content}</div>
    </div>
  );
};

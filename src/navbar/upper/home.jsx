import React from "react";
import logo from "../../img/logo.png";
import "../../navbar/nav.css";

export const Home = () => {
  return (
    <div className="homepage">
      <img src={logo} alt="#" />
      <button class="normbutton">Top Books</button>
      <button class="normbutton">View Books</button>
      <button class="category">Category</button>
      <div class="searchButton">
        <input type="text" placeholder="Search here" />
        <button class="search">Search</button>
      </div>
    </div>
  );
};

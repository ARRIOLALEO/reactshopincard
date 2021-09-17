import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search.jsx";
import logo from "../assets/bb_logo.png";
import Cart from "./Cart.jsx";
const Header = (props) => {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="This is the logo of the company" />
        </Link>
      </div>
      <div className="search">
        <Search />
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
};

export default Header;

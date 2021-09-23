import React from "react";
import { Link } from "react-router-dom";

const LateralMenu = () => {
  return (
    <div className="lateralmenu">
      <ol>
        <li>
          <Link to="/admin">General Information </Link>
        </li>
        <li>
          <Link to="/add-product">Add new Product</Link>
        </li>
      </ol>
    </div>
  );
};
export default LateralMenu;

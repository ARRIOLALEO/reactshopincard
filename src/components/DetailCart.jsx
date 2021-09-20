import React from "react";
import { Link } from "react-router-dom";
import { ShopingCart } from "../context/Cart.jsx";
import ProductDetailCart from "./ProductDetailCart.jsx";
function DetailCart() {
  return (
    <ShopingCart.Consumer>
      {(carfunction) => (
        <div className="cart-preview">
          <table>
            {Object.keys(carfunction.cart).map((product) => (
              <ProductDetailCart
                product={carfunction.cart[product]}
                delete={carfunction.dropElement}
                id={product}
              />
            ))}
          </table>
          <div className="btnShowDetails">
            <Link to="/cart-description">SEE YOUR CART</Link>
          </div>
        </div>
      )}
    </ShopingCart.Consumer>
  );
}
export default DetailCart;

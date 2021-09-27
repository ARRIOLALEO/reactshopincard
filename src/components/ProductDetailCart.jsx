import React, { useState } from "react";
import app from "..";
import product from "../assets/product.jpg";
function ProductDetailCart(props) {
  const [urlImage, setUrlImage] = useState("");
  const { quantity, price, name } = props.product;
  return (
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{price * quantity}</td>
      <td>
        <button onClick={() => props.delete(props.id)}>x</button>
      </td>
    </tr>
  );
}
export default ProductDetailCart;

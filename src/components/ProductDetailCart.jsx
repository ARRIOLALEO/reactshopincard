import React from "react";

function ProductDetailCart(props) {
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

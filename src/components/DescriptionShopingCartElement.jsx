import React from "react";

function DescriptionShopingCartElement(props) {
  const { id, name, quantity, price, image } = props.product;
  console.log(props.product);
  return (
    <tr>
      <td>
        <img src={image} alt={name} className="imageDesciption"/>
      </td>
      <td> {id}</td>
      <td>{name}</td>
      <td>
        <input type={Text} pattern="[0-9]" value={quantity} />
      </td>
      <td>{price}</td>
    </tr>
  );
}

export default DescriptionShopingCartElement;

import React from "react";
import { ShopingCart } from "../context/Cart.jsx";

function DescriptionShopingCartElement(props) {
  const { name, quantity, price, image } = props.product;
  const { id } = props;
  return (
    <ShopingCart.Consumer>
      {(optionsShopincard) => (
        <tr>
          <td>
            <img src={image} alt={name} className="imageDesciption" />
          </td>
          <td> {id}</td>
          <td>{name}</td>
          <td>
            <div className="containerDiv">
              <button
                className="circularButton"
                onClick={() => optionsShopincard.addRemoveShopingCart("", id)}
              >
                -
              </button>
              <input type={Text} pattern="[0-9]" value={quantity} />
              <button
                className="circularButton"
                onClick={() => optionsShopincard.addRemoveShopingCart("add", id)}
              >
                +
              </button>
            </div>
          </td>
          <td>{price}</td>
          <td>
            <button onClick={() => optionsShopincard.dropElement(id)}>x</button>
          </td>
        </tr>
      )}
    </ShopingCart.Consumer>
  );
}

export default DescriptionShopingCartElement;

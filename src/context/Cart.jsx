import React, { createContext, useState } from "react";

export const ShopingCart = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({});
  const [subTotal, setSubtotal] = useState(0);
  const updateCart = (id, quantity, price, name, image) => {
    if (id in cart) {
      let updateAmount = { ...cart };
      updateAmount[id].quantity += parseInt(quantity);
      setCart(updateAmount);
    } else {
      let mydict = { ...cart };
      mydict[id] = { quantity: quantity, price: price, name: name, image: image };
      setCart(mydict);
    }
  };
  function addRemoveShopingCart(action, id) {
    let updateCard = { ...cart };
    if (action == "add") {
      updateCard[id].quantity += 1;
      setCart(updateCard);
    } else {
      if (updateCard[id].quantity < 2) {
        dropElement(id);
      } else {
        updateCard[id].quantity -= 1;
        setCart(updateCard);
      }
    }
  }
  function dropElement(id) {
    const temp = { ...cart };
    delete temp[id];
    setCart(temp);
  }
  function getAmountProducts() {
    let amount = 0;
    let subtotal = 0;
    for (let element in cart) {
      amount += cart[element].quantity;
      subtotal = subtotal + cart[element].quantity * cart[element].price;
    }
    setSubtotal(subtotal);
    return amount;
  }
  function getSubtotal() {
    return subTotal;
  }
  const provierValues = {
    updateCart,
    cart,
    getAmountProducts,
    getSubtotal,
    addRemoveShopingCart,
    dropElement,
  };
  return <ShopingCart.Provider value={provierValues}>{children}</ShopingCart.Provider>;
};

export default CartProvider;

import React from "react";
import app from "../../../base.jsx";

export default function ProductAdmin(props) {
  const { name, price, image, categorie } = props.product;
  return (
    <>
      <div className="containerProductAdmin">
        <div className="imageProductAdmin">{image}</div>
        <div className="nameProductAdmin">{name}</div>
        <div className="priceProductAdmin">{price}</div>
        <div className="categorieProductAdmin">{categorie}</div>
      </div>
    </>
  );
}

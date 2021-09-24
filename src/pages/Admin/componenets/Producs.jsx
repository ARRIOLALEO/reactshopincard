import React from "react";
import app from "../../../base.jsx";

export default async function ProductAdmin(props) {
  const { name, price, image, categorie } = props.product;
  const storageRef = await app.storage().ref();
  const imageRef = await storageRef.child(image);
  imageRef.getDownloadURL().then((url) => {
    console.log(url);
  });
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

import React, { useState, useEffect } from "react";
import app from "../../../base.jsx";
export default function ProductAdmin(props) {
  const [urlImage, setUrlImage] = useState("");
  const { name, price, image, categorie } = props.product;
  useEffect(() => {
    const storageRef = app.storage().ref();
    const imageRef = storageRef.child(image).getDownloadURL();
    imageRef.then((url) => setUrlImage(url));
  }, []);
  return (
    <>
      <div className="containerProductAdmin">
        <div className="imageProductAdmin">
          <img src={urlImage} />
        </div>
        <div className="nameProductAdmin">{name}</div>
        <div className="priceProductAdmin">{price}</div>
        <div className="categorieProductAdmin">{categorie}</div>
      </div>
    </>
  );
}

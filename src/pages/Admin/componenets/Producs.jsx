import React, { useState, useEffect } from "react";
import app from "../../../base.jsx";
import { useHistory } from "react-router-dom";
import product from "../../../assets/product.jpg";
export default function ProductAdmin(props) {
  const history = useHistory();
  const [urlImage, setUrlImage] = useState("");
  const { name, price, image, categorie, id } = props.product;
  useEffect(() => {
    const storageRef = app.storage().ref();
    const imageRef = storageRef.child(image).getDownloadURL();
    imageRef.then((url) => setUrlImage(url));
  }, []);

  async function handleRemove(id) {
    const refDocument = await app.firestore().collection("products").where("name", "==", name);
    const resolvePRomise = await refDocument.get();
    console.log(resolvePRomise.docs);
    resolvePRomise.forEach(async (docID) => {
      try {
        const result = await app.firestore().collection("products").doc(docID.id).delete();
        history.push("/");
      } catch (error) {
        console.log("er have an error when we tried to delete this product");
      }
    });
  }
  return (
    <>
      <div className="containerProductAdmin">
        <div className="imageProductAdmin">
          <img src={urlImage ? urlImage : product} />
        </div>
        <div className="nameProductAdmin">{name}</div>
        <div className="priceProductAdmin">{price}</div>
        <div className="categorieProductAdmin">{categorie}</div>
        <div className="removeProduct">
          <button className="removeElement" onClick={() => handleRemove({ id })}>
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import app from "../base.jsx";
import LateralMenu from "../components/LateralMenu.jsx";
import { useHistory } from "react-router-dom";
function AddProduct() {
  const history = useHistory();
  const handlarSubmit = (e) => {
    e.preventDefault();
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(e.target.image.files[0].name);
    fileRef.put(e.target.image.files[0]).then(() => {
      console.log("the image was upload");
      history.push("/admin");
    });
    const productDetails = [...e.target.elements];
    productDetails.pop();
    const data = productDetails.reduce((allData, element) => {
      if (element.value != undefined) {
        allData[element.name] = element.value;
      }
      return allData;
    }, {});
    data.image = e.target.image.files[0].name;
    try {
      app.firestore().collection("products/").add(data);
    } catch (error) {
      console.log("something is not write here");
    }
  };
  return (
    <>
      <Header />
      <div className="contentaddproduct">
        <div className="lateralmenu">
          <LateralMenu />
        </div>
        <div className="formaddproduct">
          <form onSubmit={handlarSubmit}>
            <label>
              Name
              <input type="text" name="name" />
            </label>
            <label>
              Price
              <input type="number" name="price" />
            </label>
            <label>
              image
              <input type="file" name="image" />
            </label>
            <label>
              Category
              <input type="text" name="category" />
            </label>
            <button type="submit"> Save</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default AddProduct;

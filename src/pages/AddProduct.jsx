import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import app from "../base.jsx";
import LateralMenu from "../components/LateralMenu.jsx";
import { useHistory } from "react-router-dom";
function AddProduct() {
  const [imagereference, setImageReference] = useState("");
  const history = useHistory();
  const handlarSubmit = async (e) => {
    e.preventDefault();
    const storageRef = await app.storage().ref();
    const fileRef = await storageRef.child(e.target.image.files[0].name);

    const productDetails = [...e.target.elements];
    productDetails.pop();
    const data = await productDetails.reduce((allData, element) => {
      if (element.value != undefined) {
        allData[element.name] = element.value;
      }
      return allData;
    }, {});
    data.image = e.target.image.files[0].name;
    try {
      await fileRef.put(e.target.image.files[0]).then(async () => {
        setImageReference(fileRef.getDownloadURL());
        history.push("/admin");
      });
      data.id = await app.database().ref().child("products").push().key;

      await app.firestore().collection("products/").add(data);
    } catch (error) {
      console.log("something is not write here", error);
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

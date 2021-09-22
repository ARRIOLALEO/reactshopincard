import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import app from "../base.jsx";
function AddProduct() {
  const handlarSubmit = (e) => {
    e.preventDefault();
    const productDetails = [...e.target.elements];
    productDetails.pop();
    const data = productDetails.reduce((allData, element) => {
      if (element.value != undefined) {
        allData[element.name] = element.value;
      }
      return allData;
    }, {});
    app.firestore().collection("products/").add(data);
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className="content">
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
      <Footer />
    </>
  );
}
export default AddProduct;

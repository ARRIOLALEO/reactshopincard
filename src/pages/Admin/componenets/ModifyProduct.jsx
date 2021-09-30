import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../../../components/Footer.jsx";
import Header from "../../../components/Header.jsx";
import app from "../../../base.jsx";
import LateralMenu from "../../../components/LateralMenu.jsx";
function ModifyProduct(props) {
  const location = useLocation();
  const { name } = location.state;
  const [productData, setProductData] = useState({});

  console.log(name);
  function handlerForm(even) {
    even.target.preventDefault();
  }
  useEffect(() => {
    async function getData(name) {
      const refDatabse = await app.firestore().collection("products").where("name", "==", name);
      const dataResolved = await refDatabse.get();
      dataResolved.forEach(async (data) => {
        try {
          setProductData(data.data());
        } catch (error) {
          console.log(error);
        }
      });
    }

    getData(name);
  }, []);
  function handlerInput(even) {
    const { name, value } = even.target;
    setProductData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <>
      <Header />
      <div className="contentaddproduct">
        <div className="lateralProduct">
          <LateralMenu />
        </div>
        <div className="formaddproduct">
          <form className="modify-prudct" onSubmit={handlerForm}>
            <label>
              name
              <input
                type="text"
                name="name"
                value={productData.name}
                onChange={handlerInput}
              ></input>
            </label>
            <label>
              Product
              <input
                type="number"
                step="0.01"
                name="price"
                value={productData.price}
                onChange={handlerInput}
              ></input>
            </label>
            <label>
              Image
              <input type="file" name="image"></input>
            </label>
            <label>
              Category
              <input
                type="text"
                name="category"
                value={productData.category}
                onChange={handlerInput}
              ></input>
            </label>
            <button type="submit">Save Changes</button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ModifyProduct;

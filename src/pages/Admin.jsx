import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LateralMenu from "../components/LateralMenu.jsx";
import app from "../base.jsx";
import ProductAdmin from "./Admin/componenets/Producs.jsx";
function Admin() {
  const [productArr, setProductsArr] = useState([]);
  async function getallPRoducts() {
    const snapshot = await app.firestore().collection("products").get();
    const data = await snapshot.docs.map((doc) => doc.data());
    setProductsArr(data);
  }
  getallPRoducts();
  const showProducts = productArr.map((prroduct) => <ProductAdmin product={prroduct} />);
  return (
    <>
      <Header />
      <div className="containeradmin">
        <div className="lateralmenu">
          <LateralMenu />
        </div>
        <div contextMenu="generalcontent">{showProducts} </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;

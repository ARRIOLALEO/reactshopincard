import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import LateralMenu from "../components/LateralMenu.jsx";
import app from "../base.jsx";
import ProductAdmin from "./Admin/componenets/Producs.jsx";
import { BallScaleRipple } from "react-pure-loaders";
function Admin() {
  const [productArr, setProductsArr] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  async function getallPRoducts() {
    const snapshot = await app.firestore().collection("products").get();
    const data = await snapshot.docs.map((doc) => doc.data());
    setProductsArr(data);
    setIsloading(false);
  }
  useEffect(() => {
    getallPRoducts();
  }, []);
  const showProducts = productArr.map((prroduct) => <ProductAdmin product={prroduct} />);
  return (
    <>
      <Header />
      <div className="containeradmin">
        <div className="lateralmenu">
          <LateralMenu />
        </div>
        <div contextMenu="generalcontent">
          {isLoading ? (
            <div className="isLoading">
              <BallScaleRipple color="#123abc" loading={isLoading} />
            </div>
          ) : (
            showProducts
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;

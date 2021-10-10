import React, { useState, useEffect } from "react";
import LateralMenu from "../components/LateralMenu.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import app from "../base.jsx";
import Order from "./Admin/componenets/Order.jsx";
function ShowOrders() {
  const [allOrders, setAllOrders] = useState([]);
  async function GetAllOrders() {
    const SnapShot = await app.firestore().collection("orders").get();
    const data = await SnapShot.docs.map((doc) => doc.data());
    setAllOrders(data);
    console.log(allOrders);
  }

  useEffect(() => {
    GetAllOrders();
  }, []);
  const ordersDisplay = allOrders.map((order) => <Order order={order} />);
  return (
    <>
      <Header />
      <div className="contentaddproduct">
        <div className="lateralmenu">
          <LateralMenu />
        </div>
        <div className="formaddproduct">
          <table className="tableOrders">{ordersDisplay}</table>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default ShowOrders;

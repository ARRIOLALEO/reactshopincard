import React from "react";
import ProductCard from "./Product.jsx";
import { ToastContainer } from "react-toastify";
function DisplayProduct(props) {
  return (
    <>
      {props.elements
        ? props.elements.map((element) => {
            return element ? <ProductCard element={element} key={element.id} /> : "it is loading";
          })
        : "im here"}
      <ToastContainer />
    </>
  );
}

export default DisplayProduct;

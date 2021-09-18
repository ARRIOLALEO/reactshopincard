import { useState } from "react";
import { AllProducts } from "../context/Producs.jsx";
export default function Search(props) {
  return (
    <AllProducts.Consumer>
      {(productsOptoions) => (
        <input type="text" onChange={(e) => productsOptoions.setWordFilteres(e.target.value)} />
      )}
    </AllProducts.Consumer>
  );
}

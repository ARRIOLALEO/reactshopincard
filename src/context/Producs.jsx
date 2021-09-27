import React, { createContext, useState, useEffect } from "react";
import app from "../base.jsx";
export const AllProducts = createContext();
const axios = require("axios").default;

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([""]);
  const [wordFilter, setWordFilteres] = useState("");
  useEffect(() => {
    async function getMyProducts() {
      try {
        const response = await app.firestore().collection("products").get();
        const data = await response.docs.map((doc) => doc.data());
        setProducts([data]);
      } catch (error) {
        console.log(error);
      }
    }
    getMyProducts();
  }, []);
  const optionsProducts = {
    products,
    wordFilter,
    setWordFilteres,
  };
  return <AllProducts.Provider value={optionsProducts}>{children}</AllProducts.Provider>;
};

export default ProductsProvider;

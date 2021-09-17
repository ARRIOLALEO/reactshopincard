import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AllProducts } from "../context/Producs.jsx";
import DisplayProduct from "../components/Products.jsx";
const Home = (props) => {
  return (
    <>
      <Header />
      <div className="products">
        <AllProducts.Consumer>
          {(context) =>
            context ? <DisplayProduct elements={context.data} /> : "<h2>im loading</h2>"
          }
        </AllProducts.Consumer>
      </div>
      <Footer />
    </>
  );
};
export default Home;

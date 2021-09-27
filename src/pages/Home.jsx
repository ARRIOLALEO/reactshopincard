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
            context.products ? (
              <DisplayProduct elements={context.products[0]} filter={context.wordFilter} />
            ) : (
              "<h2>im loading</h2>"
            )
          }
        </AllProducts.Consumer>
      </div>
      <Footer />
    </>
  );
};
export default Home;

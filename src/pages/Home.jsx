import React, { useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { AllProducts } from "../context/Producs.jsx";
import DisplayProduct from "../components/Products.jsx";
import Jumbotron from "../components/Jumbotron.jsx";
import FeatureList from "../components/FeatureList.jsx";
import BannerManPage from "../components/BannerManPage.jsx";
const Home = (props) => {
  return (
    <>
      <Header />
      <Jumbotron />
      <FeatureList />
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
      <BannerManPage />
      <Footer />
    </>
  );
};
export default Home;

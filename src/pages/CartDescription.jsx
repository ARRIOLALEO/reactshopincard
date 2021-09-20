import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ShopingCart } from "../context/Cart.jsx";
import DescriptionShopingCartElement from "../components/DescriptionShopingCartElement.jsx";
function CartDescription() {
  return (
    <>
      <ShopingCart.Consumer>
        {(cartFunctions) => (
          <>
            <Header />
            <div className="pageContainer">
              <table>
                {Object.keys(cartFunctions.cart).map((product) => {
                  return (
                    <DescriptionShopingCartElement
                      id={product}
                      product={cartFunctions.cart[product]}
                    />
                  );
                })}
              </table>
            </div>
            <Footer />
          </>
        )}
      </ShopingCart.Consumer>
    </>
  );
}

export default CartDescription;

import React, { useState } from "react";
import { ShopingCart } from "../context/Cart.jsx";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import app from "../base.jsx";
function CheckOut() {
  // colect the data from the form
  //
  //
  // this is the hanlder for the delivery
  const [deliveryOption, setDelivery] = useState("Deliveri");
  const orderState = "Ordered";
  const hanlderOnsubmit = async (eve) => {
    eve.preventDefault();
    const orderDetails = [...eve.target.elements];
    // remove the las element of the form is the button
    orderDetails.pop(-1);

    // add the data to an object to prepair to save
    const data = orderDetails.reduce((alldata, fiel) => {
      if (fiel.value != undefined) {
        alldata[fiel.name] = fiel.value;
      }
      return alldata;
    }, {});

    // dave the data in firebase
    // create a reference to firebasei
    try {
      await app.firestore().collection("orders/").add(data);
    } catch (error) {
      console.log(error);
    }
  };
  function handlerCountry(event) {
    setCountry(event.target.value);
  }
  const [country, setCountry] = useState("El Salvador");
  return (
    <ShopingCart.Consumer>
      {(cartFunctions) => (
        <>
          <Header />
          <section className="products">
            <section className="secionOrder">
              <form onSubmit={hanlderOnsubmit} className="formOrder">
                <label>
                  Name
                  <input name="name" type="Text" />
                </label>
                <label>
                  Numero Telefonico
                  <input
                    name="telefono"
                    type="text"
                    onKeyPress={(event) => {
                      if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </label>
                <label>
                  Select the Country:
                  <select name="pais" value={country} onChange={handlerCountry}>
                    <option value="El Salvador">El Salvador</option>
                    <option value="India">India</option>
                  </select>
                </label>
                <label>
                  Address 1
                  <input name="addressone" type="text" />
                </label>
                <label>
                  Address 2
                  <input name="address2" type="text" />
                </label>
                <label>
                  City
                  <input name="city" type="text" />
                </label>
                <label>
                  Delivery Options
                  <input
                    type="radio"
                    name="delivery"
                    value={deliveryOption}
                    onChange={() => setDelivery("Deliveryy")}
                  />
                  <input
                    type="radio"
                    name="delivery"
                    value={deliveryOption}
                    onChange={() => setDelivery("At Restaurant")}
                  />
                </label>
                {Object.keys(cartFunctions.cart).map((product, index) => {
                  return (
                    <input
                      type="hidden"
                      name={index}
                      value={[
                        cartFunctions.cart[product].name,
                        cartFunctions.cart[product].price,
                        cartFunctions.cart[product].quantity,
                      ]}
                    />
                  );
                })}
                <input type="hidden" name="state" value={orderState} />
                <button type="submit"> Make and Order </button>
              </form>
            </section>
            <section className="descriptionOrder">
              <table>
                <tr>
                  <td>Your Order</td>
                </tr>
                <tr>
                  <td>Product</td>
                </tr>
                {Object.keys(cartFunctions.cart).map((product) => {
                  return (
                    <tr>
                      <td>
                        {cartFunctions.cart[product].name} ({cartFunctions.cart[product].quantity})
                      </td>
                      <td>{cartFunctions.cart[product].price}</td>
                    </tr>
                  );
                })}
              </table>
            </section>
          </section>
          <Footer />
        </>
      )}
    </ShopingCart.Consumer>
  );
}
export default CheckOut;

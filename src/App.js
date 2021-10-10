import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProducsProvider from "./context/Producs.jsx";
import CartProvider from "./context/Cart.jsx";
import CartDescription from "./pages/CartDescription.jsx";
import { AuthProvider } from "./auth/Auth.jsx";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";
import Admin from "./pages/Admin.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import ModifyProduct from "./pages/Admin/componenets/ModifyProduct.jsx";
import PrivateRout from "./auth/PrivateRout.jsx";
import AddProduct from "./pages/AddProduct.jsx";
import PrivateRoute from "./auth/PrivateRout.jsx";
import ShowOrders from "./pages/ShowOrders.jsx";
const App = () => {
  return (
    <AuthProvider>
      <ProducsProvider>
        <CartProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <route path="/cart-description">
                <CartDescription />
              </route>
              <route path="/login">
                <Login />
              </route>
              <route path="/signup">
                <SignUp />
              </route>
              <route path="/checkout">
                <CheckOut />
              </route>
              <PrivateRout path="/orders" component={ShowOrders} />
              <PrivateRout path="/admin" component={Admin} />
              <PrivateRout path="/add-product" component={AddProduct} />
              <PrivateRout path="/modify-product" component={ModifyProduct} />
            </Switch>
          </Router>
        </CartProvider>
      </ProducsProvider>
    </AuthProvider>
  );
};
export default App;

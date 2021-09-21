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
import PrivateRout from "./auth/PrivateRout.jsx";
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
              <PrivateRout path="/admin" component={Admin} />
            </Switch>
          </Router>
        </CartProvider>
      </ProducsProvider>
    </AuthProvider>
  );
};
export default App;

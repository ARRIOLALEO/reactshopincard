import React from "react";
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import  ProducsProvider  from './context/Producs.jsx'
import CartProvider  from './context/Cart.jsx'
const App = () =>{
  return (
    <ProducsProvider>
      <CartProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
        </CartProvider>
      </ProducsProvider>
  )
}
export default App

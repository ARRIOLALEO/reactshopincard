import React from "react";
import {BrowserRouter as Router ,Switch, Route} from "react-router-dom"
import Home from './pages/Home.jsx'
import  ProducsProvider  from './context/Producs.jsx'
const App = () =>{
  return (
    <ProducsProvider>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
      </ProducsProvider>
  )
}
export default App

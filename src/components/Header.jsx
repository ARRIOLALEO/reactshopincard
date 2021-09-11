import React from 'react';
import { Link }from 'react-router-dom';
import Search from './Search.jsx';
import Cart from './Cart.jsx'
const Header = (props) =>{
  return(
        <div>
          <div className="logo">
            <Link to="/"> 
            <img
              className="logo"
              src=""
              alt="This is the logo of the company"
            />
            </Link>
          </div>
          <div>
            <Search/>
          </div>
          <div>
            <Cart/>
          </div>
        </div>
  )
}

export default Header

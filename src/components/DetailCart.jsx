import React from 'react'
import {ShopingCart} from '../context/Cart.jsx'

function DetailCart(){
  return(
  <ShopingCart.Consumer>{
    carfunction =>(
      <> 
      <h1>here will be the cart</h1>
        
          {console.log(carfunction.cart)}
      
        </>
    )
    }
  </ShopingCart.Consumer>
  )
}
export default DetailCart

import React from 'react'
import {ShopingCart} from '../context/Cart.jsx'
import ProductDetailCart from './ProductDetailCart.jsx'
function DetailCart(){
  return(
  <ShopingCart.Consumer>{
    carfunction =>(
      <div className="cart-preview">
        <table>
          { Object.keys(carfunction.cart).map(product =>(<ProductDetailCart product={carfunction.cart[product]} id={product}/>))}
        </table>
      </div>
    )
    }
  </ShopingCart.Consumer>
  )
}
export default DetailCart

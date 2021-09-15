import React,{useState} from 'react'
import {ShopingCart} from '../context/Cart.jsx'
export default function Cart(props) {
    
  function handleCartClick(evt){
    evt.preventDefault()
    console.log("this is click to show information")
   }
  let data=0
  return(
    <ShopingCart.Consumer>
      {cartFunctions =>(
    <div className="cart">
      <table className="tableCart">
        <thead>
        </thead>
        <tbody>
        <tr>
          <td>No. Items:</td>
          <td>{cartFunctions.getAmountProducts()}</td>
        </tr>
        <tr>
          <td>Sub Total:</td>
          <td>$ {cartFunctions.getSubtotal()} </td>
        </tr>
          </tbody>
      <tfoot>
        </tfoot>
      </table>
      <button onClick={handleCartClick} href='#'>
        <img 
          className="cartStyle"
          src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          alt="this is the cart"
        />
      </button>
    </div>
      )
    }
      </ShopingCart.Consumer>
  )
}

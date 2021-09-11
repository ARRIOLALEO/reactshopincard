import React from 'react'
export default function Cart(props) {
  function handleCartClick(evt){
    evt.preventDefault()
    console.log("this is click to show information")
  }
  return(
    <div className="cart">
      <table className="tableCart">
        <thead>
        </thead>
        <tbody>
        <tr>
          <td>No. Items:</td>
          <td>25</td>
        </tr>
        <tr>
          <td>Sub Total:</td>
          <td>$        </td>
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

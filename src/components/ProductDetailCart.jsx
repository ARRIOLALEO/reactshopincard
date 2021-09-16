import React from 'react'

function ProductDetailCart(prop){
  const {quantity,price,name} = prop.product
  return(
    <tr>
      <td>{name}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{price * quantity}</td>
    </tr>
  )
}
export default ProductDetailCart

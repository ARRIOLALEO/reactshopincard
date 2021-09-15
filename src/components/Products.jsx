import React from 'react'
import ProductCard from './Product.jsx'
function DisplayProduct(props) {
  return(
    <>
      {props.elements?(props.elements.map(element=>{
        return(
          element?(<ProductCard element={element} key={element.id}/>):("it is loading")
        )
      })):("im here")}
    </>
  )
}

export default DisplayProduct

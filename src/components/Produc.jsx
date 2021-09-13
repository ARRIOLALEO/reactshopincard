import React from 'react'

function DisplayProduct(props) {
  return(
    <>
      {props.elements?(props.elements.map(element=>{
        return(
          <div className="cardProduc">

            <img className="productImage"src={element.image} key={element.id}/>
            <div className="information">
              <span>{element.name}</span>
              <span>$ {element.price}</span>
            </div>
            <div className="quantity">
              <button className="circularButton">-</button>
              <input  className="quantityInput" type="text" pattern="[0-9]"/>
              <button className="circularButton">+</button>
            </div>
            <div className="addToCartBtn">
              <button className="addToCart">ADD TO CART</button>
            </div>
          </div>
        )
      })):("im here")}
    </>
  )
}

export default DisplayProduct

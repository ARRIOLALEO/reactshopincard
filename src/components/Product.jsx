import React, {useState} from 'react'

function ProductCard(props){
  const [quantity,setQuantity] = useState(0)
  const{id,name,price,image} = props.element
  
  function manageQuantity(operation){
    if (operation){
      setQuantity(quantity + 1)
    }else{
      if (quantity >= 1){
      setQuantity(quantity - 1)
      }
    }
  }
  return(
  <div  className="cardProduc">
    <img className="productImage" src={image} key={id}/>
    <div className="information">
      <span>{name}</span>
      <span>{price}</span>
    </div>
    <div className="quantity">
      <button className="circularButton" onClick={()=>manageQuantity(false)}>-</button>
      <input className="quantityInput" type="text" value={quantity} pattern="[0-9]"/>
      <button className="circularButton" onClick={()=>manageQuantity(true)}>+</button>
    <div className="addToCartBtn">
      <button className="addToCart">ADD TO CARR</button>
    </div>
    </div>
      </div>
      )
}
export default ProductCard

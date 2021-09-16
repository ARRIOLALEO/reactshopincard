import React, {useState} from 'react'
import {toast} from 'react-toastify'
import {ShopingCart} from '../context/Cart.jsx'
import 'react-toastify/dist/ReactToastify.css'
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
  function manageInput(e){
    setQuantity(e.target.value)
  }
  function manageAddTocard(data,id){
    data.updateCart(id,parseInt(quantity),price,name)
    setQuantity(0)
    toast("The product was added to the Cart")
  }
  return(
    <ShopingCart.Consumer>
      {hendler=>(
  <div  className="cardProduc">
    <img className="productImage" src={image} key={id}/>
    <div className="information">
      <span>{name}</span>
      <span>{price}</span>
    </div>
    <div className="quantity">
      <button className="circularButton" onClick={()=>manageQuantity(false)}>-</button>
      <input className="quantityInput" type="text" onChange={manageInput}  value={quantity} pattern="[0-9]"/>
      <button className="circularButton" onClick={()=>manageQuantity(true)}>+</button>
    <div className="addToCartBtn">
      <button className="addToCart" onClick={()=> manageAddTocard(hendler,id,price,name)}>ADD TO CARR</button>
    </div>
    </div>
      </div>)}
      </ShopingCart.Consumer>
      )
}
export default ProductCard

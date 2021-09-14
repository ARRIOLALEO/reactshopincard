import React,{useState} from 'react'

function DisplayProduct(props) {
  const [quantity,setQuantity] = useState(0)
  function manageQuantity(operation,value){
    if (operation == true){
      setQuantity(quantity+1)
    }
  }
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
              <input  className="quantityInput" type="text" pattern="[0-9]" value={quantity}/>
              <button className="circularButton" onClick={()=>manageQuantity(true,quantity)}>+</button>
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

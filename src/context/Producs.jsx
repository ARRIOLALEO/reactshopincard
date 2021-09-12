import React, {createContext, useState , useEffect} from 'react'

export const AllProducts = createContext();
const axios = require('axios').default

const  ProductsProvider=({children}) =>{
  const [products,setProducts] = useState([])
  useEffect(()=>{
    async function getMyProducts(){
      try{
        const response= await axios.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
        setProducts(response)
      }catch(error){
        console.log(error)
      }
    }
    getMyProducts()
  },[])
  return(
  <AllProducts.Provider value={products}>
    {children}
  </AllProducts.Provider>
  )
}

export default ProductsProvider

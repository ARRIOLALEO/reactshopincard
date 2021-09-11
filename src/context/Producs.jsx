import React, {createContext} from 'react'

export const allProducts = createContext();
const axios = require('axios').default
async function getUsers(){
  try{
    const response= await axios.get('https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json')
    return(response.data)
  }catch(error){
    console.log(error)
  }
}
const  ProductsProvider=({children}) =>{
  const data = getUsers();
  return(
  <allProducts.Provider value={data}>
    {children}
  </allProducts.Provider>
  )
}

export default ProductsProvider

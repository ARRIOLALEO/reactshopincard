import React   from 'react'
import Header from '../components/Header.jsx'
import {AllProducts} from '../context/Producs.jsx'
const Home = (props) =>{
  return (
    <div className="bodyPage">
      <Header/>
      <AllProducts.Consumer>{
        data=>{
          if (data.data != null){
            data.data.forEach(product=>{
              console.log(product)
            })
          }
        }
        }
        </AllProducts.Consumer>
    </div>
  )

}
export default Home 

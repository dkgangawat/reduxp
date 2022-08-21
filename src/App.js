import React from 'react'
import "./App.css"
import ProductListing from './components/productListing'
import Header from './components/Header'
import {  Routes,Route} from "react-router-dom";
import Cart from './components/Cart';
import ProductDetails from './components/productDetails';
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/reduxp/" element={<ProductListing/>}/>
      <Route path="/reduxp/cart" element={<Cart/>}/>
      <Route path='/reduxp/cart/productdetail/:productId' element={<ProductDetails/>}/>
      </Routes>  
 
    </>
  )
}

export default App
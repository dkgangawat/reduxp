import React from 'react'
import "./App.css"
import ProductListing from './components/productListing'
import Header from './components/Header'
import {  Routes,Route} from "react-router-dom";
import Cart from './components/Cart';
import ProductDetails from './components/productDetails';
import Categories from './components/categories';
import BotNav from './components/BotNav';
import Login from './components/Login';
import { SignUp } from './components/Login';
const App = () => {
  return (
    <>
      <Header/>
      <Routes>
      <Route path="/shoppingcart/" element={<ProductListing/>}></Route>
      <Route path="/shoppingcart/cart" element={<Cart/>}/>
      <Route path='/shoppingcart/cart/productdetail/:productId' element={<ProductDetails/>}/>
      <Route path='/shoppingcart/category/:category' element={<Categories/>}/>
      <Route path='/shoppingcart/login' element={<Login/>}/>
      <Route path='/shoppingcart/signup' element={<SignUp/>}/>
      </Routes>  
      <BotNav/>
 
    </>
  )
}

export default App
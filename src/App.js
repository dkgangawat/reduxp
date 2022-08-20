import React from 'react'
import "./App.css"
import ProductListing from './components/productListing'
import Header from './components/Header'
import { BrowserRouter as Router, Routes,Route,Link} from "react-router-dom";
import Loading from './components/loading';
import Cart from './components/Cart';
import AppContext from './context/appContext';
import ProductDetails from './components/productDetails';
const App = () => {
  return (
    <>
    <AppContext>
     <Header/>
      <Routes>
      <Route path="/reduxp/" element={<ProductListing/>}/>
      <Route path="/reduxp/cart" element={<Cart/>}/>
      <Route path='/reduxp/cart/productdetail' element={<ProductDetails/>}/>
      </Routes>  
    </AppContext>
    <li>
      <Link to="/reduxp/cart/productdetail">details</Link>
    </li>
    </>
  )
}

export default App
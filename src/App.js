import React from 'react'
import "./App.css"
import ProductListing from './components/productListing'
import Header from './components/Header'
import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
const App = () => {
  return (
    <>
    <Header/>
  <Router>
      <Routes>
      <Route path="/" element={<ProductListing/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
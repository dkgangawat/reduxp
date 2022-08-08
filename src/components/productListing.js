import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Card from "./card"
import { SetProduct } from './../state/action/productAction';


const ProductListing = () => {
  const dispatch = useDispatch()
  const fetchData= async()=>{
    const responce = await axios.get(`https://fakestoreapi.com/products`).catch((err)=>{
        console.log("err",err);
    })
    dispatch(SetProduct(responce.data))
    console.log(responce)
}
useEffect(()=>{
  fetchData();
});
  return (
    <>
    <div className="container">
        <Card/> 
    </div>
 
    </>
  )
}

export default ProductListing

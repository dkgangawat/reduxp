import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import Card from "./card"
import { SetProduct  } from './../state/action/productAction';
import { Container } from "@mui/system";

const ProductListing = () => {
  const dispatch = useDispatch()
  const fetchData= async()=>{
    const responce = await axios.get(`https://fakestoreapi.com/products`).catch((err)=>{
        console.log("err",err);
    })
    dispatch(SetProduct(responce.data))
} 
useEffect(()=>{
  fetchData();
});

  return (
    <>
    <Container sx={{display:"flex",flexWrap:"wrap"}}>
       <Card/> 
    </Container>
    </>
  )
}

export default ProductListing

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
    <Container sx={{display:"flex",flexWrap:"wrap",marginTop:"16px"}}>
      <h3 style={{paddingBottom:'8px', display:"block",width:"100%"}}>Add some items to cart</h3>
       <Card/> 
    </Container>
    </>
  )
}

export default ProductListing

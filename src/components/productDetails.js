import React from 'react'
import {  Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { clickedItem } from './card';
import { useDispatch } from 'react-redux/es/exports';
import { AddToCart } from '../state/action/productAction';
import {Link} from "react-router-dom"
import { RemoveFromCart } from '../state/action/productAction'; 
import { ispresent } from '../state/reducer/AddTOCartReducer';
import { useParams } from 'react-router-dom';
import  axios  from 'axios';
import { useEffect } from 'react';
import { LocalGasStation } from '@mui/icons-material';
import { useState } from 'react';
const ProductDetails = () => {
  const [responce ,setResponce]=useState({})
  const {productId} = useParams();
  const dispatch = useDispatch();
  const fetchData= async()=>{
     const responce= await axios.get(`https://fakestoreapi.com/products/${productId}`).catch((err)=>{
        console.log("err",err);
    })
    setResponce(responce.data)
}
useEffect(()=>{
  fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])
  const addtocart=()=>{
    if(ispresent(productId)){
      dispatch(RemoveFromCart(productId));
      const dt = document.getElementById(productId)
      dt.innerHTML="add to cart"
    }else{
      const dt = document.getElementById(productId)
      dt.innerHTML="remove from cart"
       dispatch(AddToCart(responce));
    }
   }
    const {title,image,price,category,description} = responce;
  return (
    <>
      {    console.log(responce)}
      <Card  sx={{ display:"flex",width:"80%", margin:"16px auto", padding:"8px",flexWrap:"wrap",boxShadow:"0 0 0 gray"}}>
        <CardMedia component="img" 
        image={image}
         sx={{width:{xs:"100%",sm:"150px"},height:"200px",display:"inline-block",objectFit:"contain"}}/>
         <CardActionArea sx={{margin:'12px',padding:"5px",width:{xs:"100%",sm:"auto"}}}>
        <Typography variant='h5' sx={{fontWeight:"bold"}}>{title}</Typography>
        <Typography  sx={{fontWeight:"bold",color:"green"}}> ${price}</Typography>
        <Typography >{description}</Typography>
        <Typography  sx={{fontWeight:"bold"}}>{category}</Typography>
         </CardActionArea>
          <Button id={parseInt(productId)} variant='contained' sx={{width:{xs:"100%",sm:"40%"},display:"block",margin:" 16px auto"}} onClick={addtocart}>{ispresent(productId)?"remove from cart":"add to cart"}</Button>
          <Button variant='contained' sx={{width:{xs:"100%",sm:"40%"},display:"block",margin:"16px auto",bgcolor:"orange",'&:hover':{
            bgcolor:"orangered"
          }}}><Link to="/reduxp/cart" style={{textDecoration:"none",color:"inherit"}}>go to Cart</Link></Button>
      </Card>
    </>
  )
}

export default ProductDetails
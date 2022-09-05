import React from 'react'
import {  Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { useDispatch } from 'react-redux/es/exports';
import { AddToCart } from '../state/action/productAction';
import {NavLink} from "react-router-dom"
import { RemoveFromCart } from '../state/action/productAction'; 
import { useParams } from 'react-router-dom';
import  axios  from 'axios';
import { useEffect,useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import Loading from './loading';


const ProductDetails = () => {
  const [responce ,setResponce]=useState({})
  const {productId} = useParams();
  const dispatch = useDispatch();
  const cartItems = useSelector((state)=>state.HandleCart.CartArray);
  const ispresent=(item) =>{
    return cartItems.find((element)=>{
    if(parseInt(element.id)===parseInt(item)){
      return true;
    }else{return false}
  })} 
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
      {(responce.id===undefined)?<Loading/>:<Card  sx={{ display:"flex",width:"80%", margin:"16px auto", padding:"8px",flexWrap:"wrap",boxShadow:"0 0 0 gray"}}>
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
          <Button variant='contained' component={NavLink} to="/shoppingcart/cart" sx={{width:{xs:"100%",sm:"40%"},display:"block",margin:"16px auto",bgcolor:"orange",textAlign:"center",'&:hover':{
            bgcolor:"orangered"
          }}}>go to Cart</Button>
      </Card>}
      
    </>
  )
}

export default ProductDetails
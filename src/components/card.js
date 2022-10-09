import React,{useState} from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography, CardActionArea, IconButton } from '@mui/material';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { AddToFav, RemoveFromFav } from '../state/action/productAction';
import {NavLink} from "react-router-dom"
import axios from 'axios';
import  FavoriteIcon  from '@mui/icons-material/Favorite';
var clickedItem =0;
const Mcard = (props) => {
  const dispatch = useDispatch();
    // const cartItems = useSelector((state)=>state.HandleCart.CartArray);
    const favItems = useSelector((state)=>state.HandleCart.FavArray);

    const ispresent=(item) =>{
      return(
        favItems.find((element)=>{
      return (parseInt(element.id)===parseInt(item))
    })
      ) } 
    // const ispresent=useSelector((state)=>state.HandleCart.ispresent)
    const addToFav=async (event)=>{
      // console.log("adding to cart")
      if(ispresent(event.currentTarget.id)){
        dispatch(RemoveFromFav(event.currentTarget.id));
        const dt = document.getElementById(`${event.currentTarget.id}svg`)
        dt.style.color="#bbbb"
      }else{
        const dt = document.getElementById(`${event.currentTarget.id}svg`)
        dt.style.color= "red"
        const responce = await axios.get(`https://fakestoreapi.com/products/${event.currentTarget.id}`).catch((err)=>{
      console.log(err);
    })
         dispatch(AddToFav(responce.data));
      }
     }
  return (
    <Card sx={{ height:"auto" , width:{xs:"50%",sm:"22%",md:"18%"} ,maxWidth: 320,minHeight:"250px",margin:{xs:"none",sm:"4px auto"},
    // boxShadow:{xs:"none",sm:"0px 1px 4px gray"},
    padding:"4px",
    position:"relative",
    transition:"all 0.3s ease",
    borderRadius:"0px",
    textDecoration:"none",
    border:"1px solid #bbbb",
    "&:hover":{
      position:"relative",
      transform:{sx:"scale(1)",sm:"scale(1.05)"},
      backgroundColor:"white",
      // boxShadow:{xs:"none",sm:"-2px -2px 8px gray"},
     }
     }}>
      <NavLink to={`/shoppingcart/cart/productdetail/${props.id}`} style={{ textDecoration:"none",}}>
  <CardMedia
 component="img"
 image={props.image}
 alt="green iguana"
 sx={{objectFit:"contain",padding:"5px",height:"100px"}}
/>  
<Typography component="h5" sx={{fontSize:"0.9rem",fontWeight:"600",color:"#0F1111",margin :"5px 0px 5px 16px"}} >
 {props.title.substring(0,50)}</Typography>
 <Typography component="h5" sx={{fontSize:"0.9rem",color:"green",fontWeight:"600",margin :"5px 0px 5px 16px"}} >
 {`${props.price} ₹ `}</Typography>
 <Typography component="h5" sx={{fontSize:"0.9rem",color:"#bbbb",fontWeight:"600",margin :"5px 0px 5px 16px"}} >
 {props.category}</Typography>
 </NavLink>
<IconButton id={props.id} onClick={addToFav} sx={{boxShadow:"0 0 4px #bbbb",position:"absolute",top:"8px",right:"8px"}}>{ispresent(props.is)?<FavoriteIcon id={`${props.id}svg`} sx={{color:"red",fontSize:"18px"}}/>:<FavoriteIcon id={`${props.id}svg`} sx={{color:"#bbbb",fontSize:"18px"}}/>}</IconButton>

</Card>
  )
}

export default Mcard
export {clickedItem}
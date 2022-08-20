import React, { useContext } from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Container, flexbox, padding } from '@mui/system';
import { useSelector } from 'react-redux';
import {appcontext} from '../context/appContext';
import { clickedItem } from './card';
import { useDispatch } from 'react-redux/es/exports';
import { AddToCart } from '../state/action/productAction';
import {Link} from "react-router-dom" 
const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state)=>state.allproducts.products);
  const addtocart=()=>{
    dispatch(AddToCart(products[clickedItem]));
  }
  console.log(clickedItem);
  const a =useContext(appcontext)
    const {id,title,image,price,category,description} = products[clickedItem];
  return (
    <>
      
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
          <Button variant='contained' sx={{width:{xs:"100%",sm:"40%"},display:"block",margin:" 16px auto"}} onClick={addtocart}>Add to Cart</Button>
          <Button variant='contained' sx={{width:{xs:"100%",sm:"40%"},display:"block",margin:"16px auto",bgcolor:"orange",'&:hover':{
            bgcolor:"orangered"
          }}}><Link to="/reduxp/cart" style={{textDecoration:"none",color:"inherit"}}>go to Cart</Link></Button>
      </Card>
    </>
  )
}

export default ProductDetails
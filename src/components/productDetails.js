import React, { useContext } from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Container, flexbox, padding } from '@mui/system';
import { useSelector } from 'react-redux';
import {appcontext} from '../context/appContext';
import { clickedItem } from './card';
const ProductDetails = () => {
  console.log(clickedItem);
  const a =useContext(appcontext)
  const products = useSelector((state)=>state.allproducts.products);
    const {id,title,image,price,category,description} = products[clickedItem-1];
  return (
    <>
      <Card  sx={{ display:"flex",width:"80%", margin:"16px auto", padding:"8px",flexWrap:"wrap"}}>
        <CardMedia component="img" 
        image={image}
         sx={{width:{xs:"100%",sm:"150px"},height:"200px",display:"inline-block",objectFit:"contain"}}/>
         <CardActionArea sx={{margin:'12px',padding:"5px",width:{xs:"100%",sm:"auto"}}}>
        <Typography variant='h5' sx={{fontWeight:"bold"}}>{title}</Typography>
        <Typography  sx={{fontWeight:"bold",color:"green"}}> ${price}</Typography>
        <Typography >{description}</Typography>
        <Typography  sx={{fontWeight:"bold"}}>{category}</Typography>
        <Button variant='contained'>remove From Cart</Button>
         </CardActionArea>
      </Card>
    </>
  )
}

export default ProductDetails
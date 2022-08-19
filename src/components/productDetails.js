import React, { useContext } from 'react'
import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Container, flexbox, padding } from '@mui/system';
import { useSelector } from 'react-redux';
import {appcontext} from '../context/appContext';
const ProductDetails = () => {
  const a =useContext(appcontext)
    const producDetail = useSelector((state)=>state.HandleCart[a.state.ClickedCard-1]);
    const {id,title,image,price,category,description} = producDetail;
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
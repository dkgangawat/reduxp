import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux/es/exports';
import { AddToCart } from '../state/action/productAction';
import {Link} from "react-router-dom"
import { RemoveFromCart } from '../state/action/productAction';
import { ispresent } from '../state/reducer/AddTOCartReducer';
var clickedItem =0;
const Mcard = () => {
  const dispatch = useDispatch();
    const products = useSelector((state)=>state.allproducts.products);
    const addtocart=(event)=>{
      if(ispresent(event.currentTarget.id)){
        dispatch(RemoveFromCart(event.currentTarget.id));
        const dt = document.getElementById(event.currentTarget.id)
        dt.innerHTML="add to cart"
      }else{
        const dt = document.getElementById(event.currentTarget.id)
        dt.innerHTML="remove from cart"
         dispatch(AddToCart(products[event.currentTarget.id-1]));
      }
     }
     const details =(event)=>{
      clickedItem = event.currentTarget.id
     }
    const renderProductList = products.map((product,index)=>{
        const {id,title,image,price,category} = product;
        return(  
          <Card key={index} id={index} sx={{ height:"auto" , width:{xs:"40%",sm:"22%",md:"18%"} ,maxWidth: 320 ,display:"inline-block",margin:"16px auto",objectFit:"fill" ,
                      boxShadow:"0px 1px 45px gray",
                      transition:"all 0.3s ease",
                      "&:hover":{
                        position:"relative",
                        transform:{sx:"scale(1)",sm:"scale(1.1)"},
                        backgroundColor:"white",
                        boxShadow:"-2px -2px 8px gray",
                       }
                       
                       }} onClick={details}>
                        <Link to={`/reduxp/cart/productdetail/${id}`} style={{textDecoration:"none",display:"inline" ,color:"inherit"}}>
                      
               <Typography>
                    <CardMedia
                   component="img"
                   image={image}
                   alt="green iguana"
                   sx={{objectFit:"contain",padding:"5px",height:"100px"}}
                 />  
                 <Typography component="h5" sx={{fontSize:"0.9rem",margin :"5px",fontWeight:"bold"}} >
                   {title}<br/>
                   {`${price} $`}<br/>
                   {category}
                 </Typography>
               </Typography>
               </Link>
                 <Button id={id} variant='contained' sx={{bgcolor:"rgba(25, 25, 115)",fontSize:"16px",margin:"10px",textTransform:"capitalize"}} onClick={addtocart}>{ispresent(id)?"remove from cart":"add to cart"}</Button>
             </Card>
            )
    })
  return (
    <>
        {renderProductList}
    
    </>
  )
}

export default Mcard
export {clickedItem}
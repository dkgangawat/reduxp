import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, Typography } from '@mui/material';
import { useSelector } from 'react-redux'
import { useContext } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { AddToCart } from '../state/action/productAction';
import { appcontext } from '../context/appContext';
var clickedItem =0;
const Mcard = () => {
  const dispatch = useDispatch();
  const a = useContext(appcontext);
    const products = useSelector((state)=>state.allproducts.products);
    const addtocart=(event)=>{
      dispatch(AddToCart(products[event.currentTarget.id-1]));
      clickedItem = event.currentTarget.id
     }
     const details =(event)=>{
      a.updateClickedCrd(event.currentTarget.id -1)
     }
    const renderProductList = products.map((product,index)=>{
        const {id,title,image,price,category} = product;
        return(  
          <>
          <Card key={index} id={id+1} sx={{ height:"auto" , width:{xs:"40%",sm:"22%",md:"18%"} ,maxWidth: 320 ,display:"inline-block",margin:"16px auto",objectFit:"fill" ,
                      boxShadow:"0px 2px 8px gray",
                      "&:hover":{
                        position:"relative",
                        transition:"all 0.3s ease-in-out",
                        transform:"scale(1.1)",
                        backgroundColor:"white",
                        boxShadow:"-2px -2px 8px gray",
                       }
                       
                       }} onClick={details}>
               <CardActionArea>
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
                 <Button id={id} variant='contained' sx={{bgcolor:"rgba(25, 25, 115)",fontSize:"16px",margin:"10px",textTransform:"capitalize"}} onClick={addtocart}>Add to cart</Button>
               </CardActionArea>
             </Card>
             </>
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
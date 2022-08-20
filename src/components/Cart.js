import { Box, Button, Card, CardActionArea, CardMedia, Typography } from '@mui/material';
import { Container} from '@mui/system';
import React from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { RemoveFromCart } from '../state/action/productAction';
const Cart = () => {
    const cartItems = useSelector((state)=>state.HandleCart);
    const dispatch = useDispatch();
    const removeItem =(event)=>{
      dispatch(RemoveFromCart(event.currentTarget.id));
    }
    var total=0;
    const renderCartItem = cartItems.map((curr,index)=>{
      const {id,title,image,price,category} = curr;
      total=total+price;
      return(
        <Card key={index} sx={{ display:"flex",width:"100%", margin:"16px 0px", padding:"8px",flexWrap:"wrap"}}>
        <CardMedia component="img" 
        image={image}
         sx={{width:{xs:"100%",sm:"150px"},height:"200px",display:"inline-block",objectFit:"contain"}}/>
         <CardActionArea sx={{margin:'12px',padding:"5px",width:{xs:"100%",sm:"auto"}}}>
        <Typography variant='h6' sx={{fontWeight:"bold"}}>{title}</Typography>
        <Typography  sx={{fontWeight:"bold",color:"green"}}> ${price}</Typography>
        <Typography  sx={{fontWeight:"bold"}}>{category}</Typography>
        <Button id={id} variant='contained' onClick={removeItem}>remove From Cart</Button>
         </CardActionArea>
      </Card>
      )
      
    })
  return (
    <>
    <Container sx={{display:"flex",flexWrap:"wrap"}}>
      <Box sx={{width:{xs:"100%" ,sm:"70%"}}}>
        {renderCartItem}</Box>
      <Box sx={{width:{xs:"100%",sm:"30%"},  bgcolor:"rgb(52,58,64)",color:"white",fontWeight:"bold"}}>
      <Typography variant="h6" sx={{padding:"8px"}}>{`You have total ${cartItems.length} items in your cart please proceed to checkout`}</Typography><br/>
      <Typography variant='h5' padding="16px">{`SUBTOTAL $${total}`}</Typography>
      <Button variant='contained' sx={{width:"80%",display:"block", margin:"16px auto"}}>proceed to checkout</Button>
      </Box>
      
    </Container>
    
    </>
  )
}

export default Cart
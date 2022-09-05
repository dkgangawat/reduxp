import { Box, Button, Card, CardMedia, Typography } from '@mui/material';
import { Container} from '@mui/system';
import React from 'react'
import { useSelector ,useDispatch } from 'react-redux';
import { RemoveFromCart } from '../state/action/productAction';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
const Cart = () => {
    const cartItems = useSelector((state)=>state.HandleCart.CartArray);
    const totalItems = cartItems.length;
    const dispatch = useDispatch();
    const removeItem =(event)=>{
      dispatch(RemoveFromCart(event.currentTarget.id));
    }
    var total=0;
    const renderCartItem = cartItems.map((curr,index)=>{
      const {id,title,image,price} = curr;
      total=total+price;
      return(
        <Card key={index} sx={{ display:"flex",width:"100%", margin:"16px 0px", padding:"8px",boxShadow:"0 0",borderBottom:"1px solid #bbbb",borderRadius:"0"}}>
        <CardMedia component="img" 
        image={image}
         sx={{width:{xs:"50px",sm:"150px"},height:{xs:"auto",sm:"200px"},display:"inline-block",objectFit:"contain"}}/>
         <Box sx={{padding:"17px",width:{xs:"calc(100% - 50px)"}}}>
        <Typography variant='h6' sx={{fontWeight:"bold",fontSize:{xs:"12px",sm:"1rem"}}}>{title}</Typography>
        <Typography  sx={{fontWeight:"bold",color:"green"}}> ${price}</Typography>
        {/* <Typography  sx={{fontWeight:"bold"}}>{category}</Typography> */}
         <Button id={id} variant='contained' sx={{fontSize:{xs:"10px",sm:"14px"}}} onClick={removeItem}>remove From Cart</Button>
         </Box>
      </Card>
      )
      
    })
  return (
    <>{(totalItems===0)?<Container sx={{display:"flex",flexWrap:"wrap",alignItems:'center',justifyContent:"center"}}>
      <ProductionQuantityLimitsIcon sx={{color:"#bbbb",fontSize:{xs:"120px",sm:"250px"},border:"1px solid #bbbb",borderRadius:"50%"}}/>
      <p style={{display:"block",width:"100%",textAlign:"center",padding:"12px",fontSize:"32px",color:"#bbbb",fontWeight:"550"}}>Your cart is Empty!!!!</p>
    </Container>: <Container sx={{display:"flex",flexWrap:"wrap",}}>
      <Box sx={{width:{xs:"100%" ,sm:"70%"}}}>
        {renderCartItem}</Box>
      <Box sx={{width:{xs:"100%",sm:"30%"},  bgcolor:"rgb(52,58,64)",color:"white",fontWeight:"bold"}}>
      <Typography variant="h6" sx={{padding:"8px"}}>{`You have total ${cartItems.length} items in your cart please proceed to checkout`}</Typography><br/>
      <Typography variant='h5' padding="16px">{`SUBTOTAL $${total}`}</Typography>
      <Button variant='contained' sx={{width:"80%",display:"block", margin:"16px auto"}}>proceed to checkout</Button>
      </Box>
      
    </Container>}
   
    
    </>
  )
}

export default Cart
import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import Card from "./card"
import { RemoveAll, SetProduct  } from './../state/action/productAction';
import { Container } from "@mui/system";
import Loading from "./loading"

const ProductListing = () => {
  const dispatch = useDispatch()
  const products = useSelector((state)=>state.allproducts.products);
  // const cartItems = useSelector((state)=>state.HandleCart.CartArray);
  // console.log(cartItems); 
    const cancleToken = axios.CancelToken.source()
  const fetchData= async()=>{
 
     axios.get(`https://fakestoreapi.com/products`,{cancleToken:cancleToken.token}).then(
       (responce)=>{ dispatch(SetProduct(responce.data))}
    ).catch((err)=>{
        console.log("err",err);
    })
  
} 
useEffect(()=>{
  fetchData();
  return ()=>{
    cancleToken.cancel();
    dispatch(RemoveAll())
  }
},[]);
const renderProductList = products.map((product,index)=>{
  const {id,title,image,price,category} = product;
  return(
    <Card key={index} id={id} title={title} image={image} price={price} category={category}/>
  )
})
  return (
    <>
    {
      (products.length===0)?<Loading/>:   <Container sx={{display:"flex",flexWrap:"wrap",marginTop:"16px",mb:10,mt:9}}>
      <h3 style={{paddingBottom:'8px', display:"block",width:"100%"}}>Add some items to cart</h3>
      {renderProductList}
    </Container>
    }
 
    </>
  )
}

export default ProductListing

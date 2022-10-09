import React from "react"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import Card from "./card"
import { RemoveAll, SetProduct  } from './../state/action/productAction';
import { Container } from "@mui/system";
import Loading from "./loading"
import { Box } from "@mui/material"
import Slider from 'react-slick'
import slides from './../utils/Slides';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductListing = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} arrow`}
        style={{...style, right:"0px",marginRight:"4px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{...style, left
          :"0px",marginRight:"4px",
        zIndex:1
        }}
        onClick={onClick}
      />
    );
  }
  var settings = {
    className:"slider",
    dots: true,
    infinite: true,
    speed: 500,
    autoplay:"true",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow   />,
    prevArrow: <SamplePrevArrow/>
  };
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
    <Slider {...settings}>
    {slides.map((curr,index)=>{
        return(
         <div key={index}>
          <img src={curr.img} alt="" className="slide"/>
         </div>
            
     
        )
      })}
    </Slider> 

    {
      (products.length===0)?<Loading/>:   <Box sx={{display:"flex",width:{xs:"100%",sm:"90%"},margin:"auto",padding:"0",flexWrap:"wrap",mb:10}}>
      <h3 style={{padding:'8px',fontSize:"24px" ,display:"block",width:"100%"}}>Products For You</h3>
      {renderProductList}
    </Box>
    }
 
    </>
  )
}

export default ProductListing

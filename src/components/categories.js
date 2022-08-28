import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from "./card"
import { Container } from '@mui/system';
const Categories = () => {
    const [categoryItems ,setCategories]=useState([{}])
    const {category} = useParams()
    const fetchData= async()=>{
      const responce= await axios.get(`https://fakestoreapi.com/products/category/${category}`).catch((err)=>{
         console.log("err",err);
     })
    console.log(category)
     setCategories(responce.data)
  }
  useEffect(()=>{
    fetchData()
   },[category])
   const renderProductList = categoryItems.map((categoryItem,index)=>{
    const {id,title,image,price,category} = categoryItem;
    return(
      <Card key={index} id={id} title={title} image={image} price={price} category={category}/>
    )
  })
  return (
    <Container sx={{display:"flex",flexWrap:"wrap",marginTop:"16px"}}>
      <h3 style={{paddingBottom:'8px', display:"block",width:"100%"}}>Add some items to cart</h3>
      {renderProductList}
    </Container>
  )
}

export default Categories
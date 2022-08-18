import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions, Icon, Link } from '@mui/material';
import { useSelector } from 'react-redux'
const MCard = () => {
    const products = useSelector((state)=>state.allproducts.products);
    console.log(products);
    const renderProductList = products.map((product)=>{
        const {id,title,image,price,category} = product;
        return(  
          <>
          <Card id={id} sx={{ height:"auto" , width:{xs:"40%",sm:"22%",md:"18%"} ,maxWidth: 320 ,display:"inline-block",margin:"16px auto",objectFit:"fill" ,padding:"5px 0",
                      borderRadius:"12px",
                      boxShadow:"0px 2px 8px gray",
                      "&:hover":{
                        position:"relative",
                        transition:"all 0.3s ease-in-out",
                        transform:"scale(1.1)",
                        backgroundColor:"white",
                        boxShadow:"-2px -2px 8px gray",
                       }
                       
                       }}>
               <CardActionArea href='https://google.com'>
                 <div>
                    <CardMedia
                   component="img"
                   height="250"

                   image={image}
                   alt="green iguana"
                   sx={{objectFit:"contain",padding:"10px"}}
                 />  
                 </div>
                 <Button variant='contained' color='secondary' sx={{fontSize:"min(calc(0.8vw + 0.4rem),1rem)",width:"90%",textTransform:"capitalize",margin:"auto",display:"block"}}>{`You can save ${price}`}</Button>   
               </CardActionArea>
             </Card>
             </>
            )
    })
    console.log(renderProductList)
  return (
    <>
        {renderProductList}
    
    </>
  )
}

export default MCard
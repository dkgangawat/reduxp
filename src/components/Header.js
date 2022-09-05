import React,{useState} from 'react';
import { styled} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';
import {Link} from "react-router-dom"
import Filter from './Filter';
import { NavLink } from 'react-router-dom';
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

export default function  SearchAppBar () {
  const [active ,setActive]= useState(false)
  const toggleDrawer=()=>{
    setActive(!active)
  }
//   const handleClick=()=>{
//     const search = document.getElementById("searchBox");
//     const searchButton = document.getElementById("searchButton");
//     search.style.display="flex";
//     searchButton.style.display="none";
//   }
//   const handleBlur=()=>{
//     if(window.innerWidth<=600){
//  const search = document.getElementById("searchBox");
//     const searchButton = document.getElementById("searchButton");
//     search.style.display="none";
//     searchButton.style.display="block";
//     }
   
//   }
   const CartItems = useSelector((state)=>state.HandleCart.CartArray.length);
  return (
    <><Box  sx={{ flexGrow: 1 ,position:"fixed",width:"100%" ,top:"0",zIndex:"2"}}>
      <AppBar position="static" sx={{bgcolor:"#001E3C" , boxShadow:"0px 0.5px 4px gray",color:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2,color:"#E7E9EB" }}
            onClick={toggleDrawer}
          >
            <Filter active={active} toggleDrawer={toggleDrawer}/>
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component={NavLink}
            to="/shoppingcart"
            sx={{ textDecoration:"none", flexGrow: 1, display: "block",color:"#E7E9EB"  }}
          >Shop Now
          </Typography>
          {/* <Box id="searchBox" onBlur={handleBlur} sx={{ bgcolor:"rgba(229, 223, 223, 0.374)", boxShadow:"0 1px #bbbb", display:{xs:"none",sm:"block"}}}>
            <InputBase id="search" placeholder='Search...' sx={{
            width:{xs:"80%",sm:"250px"},
            paddingLeft:"4px",mr:"4px"}}/>
          <IconButton sx={{borderRadius:"0px"}}>{<SearchIcon />}</IconButton>
          </Box> */}
          
          <Stack direction="row" gap="2">
          <IconButton id='searchButton' sx={{borderRadius:"0px",color:"#E7E9EB"  ,display:{xs:"block",sm:"block"}}}  >{<SearchIcon />}</IconButton>
                <IconButton >
              <Link to="/shoppingcart/cart">
            
             <StyledBadge badgeContent={CartItems} color="secondary">
            <ShoppingCartIcon />
             </StyledBadge>
             </Link>
             </IconButton>
          <IconButton>
          <Avatar
        src="/broken-image.jpg"
        sx={{transform:"scale(0.8)",display:{xs:"none",sm:"inherit"}}}
        >
      </Avatar>
          </IconButton>
          </Stack>
         
        </Toolbar>
      </AppBar>
    </Box>
<Box sx={{width:"100vw",mt:11,height:"0px"}}/>
    </>
    
  );
}

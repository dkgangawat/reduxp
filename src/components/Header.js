import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/system';


export default function SearchAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor:"white", boxShadow:"0px 0.5px 4px gray",color:"black"}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: "block" }}
          >Shop Now
          </Typography>
          <InputBase placeholder='Search...' sx={{
            display:{xs:"none",sm:"block"},
            border:"1px solid #bbbb",borderRadius:"10px", paddingLeft:"4px",mr:"4px"}}>dfras</InputBase>
          <IconButton sx={{display:{xs:"block",sm:"none"}}}>{<SearchIcon/>}</IconButton>
          <Stack direction="row" gap="2">
             <IconButton>{<ShoppingCartIcon />}</IconButton>
          <IconButton>
          <Avatar
        src="/broken-image.jpg"
        sx={{transform:"scale(0.8)"}}
        >
      </Avatar>
          </IconButton>
          </Stack>
         
        </Toolbar>
      </AppBar>
    </Box>
  );
}

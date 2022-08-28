import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Home, Person } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import Filter from './Filter';

export default function BotNav() {
  const [value, setValue] = React.useState('recents');
  const [active ,setActive]= React.useState(false)
  const toggleDrawer=()=>{
    setActive(!active)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: "100%",display:{xs:"flex",sm:"none"} ,bgcolor:"#001E3C",position:"fixed",mt:11,bottom:"0px"}} value={value} onChange={handleChange}>
      <BottomNavigationAction
      component={NavLink} to="/shoppingcart/"
        value="recents"
        icon={<Home />}
        sx={{ color:"#E7E9EB"}}
       
      />
      <BottomNavigationAction
      component={NavLink} to="/shoppingcart/"
        value="favorites"
        icon={<FavoriteIcon />}
        sx={{ color:"#E7E9EB"}}
      />
      <BottomNavigationAction
      component={NavLink} to="/shoppingcart/"
        value="nearby"
        icon={<Person/>}
        sx={{ color:"#E7E9EB"}}
      />
      <BottomNavigationAction component={NavLink} to="/shoppingcart/"  sx={{ color:"#E7E9EB"}} onClick={toggleDrawer} value="Menu" icon={<MenuIcon />} />
      <Filter active={active} toggleDrawer={toggleDrawer}/>
    </BottomNavigation>
  );
}

import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from '@mui/system';
const Loading = () => {
  return (
    <Container sx={{height:"100vh",width:"100vw",justifyContent:"center",display:"flex",alignItems:"center"}}>
        <CircularProgress/></Container>
  )
}

export default Loading
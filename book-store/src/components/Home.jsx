import { Box, FormControlLabel, Grow, Switch } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import BS1 from '../assests/BS1.jpg'
import BS2 from '../assests/BS2.jpg'
import './Home.css'

const Home = () => {
  return (
    <Container className='card' sx={{display:'flex',flexDirection:'row' ,justifyContent:'center',maxWidth:'1000px'}}>
      <h1>Welcome to Book Store Where you'll find aur sell your book</h1>
      
    </Container>
  );
};

export default Home;

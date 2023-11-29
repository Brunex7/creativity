import React from "react";
import { Container, Box, Typography } from "@mui/material";
import Cards from "./Cards";
import About from "./About";

const Home = () => {
  const superconte ={
    display:'flex',
    flexDirection:'column',
    marginTop:'90px',
  }

  const sidebar ={
    width:'100%',
    height:'60px',
    background:'#d4cdff',
    borderRadius:'10px',
    color:'##220B4E',
    display:'flex',
    alignItems:'center',
  }

  
  return (
    <Container sx={superconte}>
      <Container sx={sidebar}>
        <Typography variant="h5" > Filters.</Typography>
      </Container>
      <Cards />
      <About />
      <Typography variant="h7" fontWeight={'bold'} color='#220B4E' display={'flex'} justifyContent={'center'} marginBottom={'30px'}>Expande tu creatividad al 100% con CREATIVITY.</Typography>
    </Container>
  );
};

export default Home;

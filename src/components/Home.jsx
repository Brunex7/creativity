import React from 'react';
import {Typography, Container, Box } from '@mui/material';
import Navbar from './Nav';
import Filter from './Filters';
import Cards from './Cards';

const Home = () => {

  return (
    <Box>
        <Navbar />
        <Filter />
        <Container >
            <Typography variant="h4" component="div" style={{ marginTop: '20px' }}>
                ENCONTRARAS HERRAMINETAS UTILES PARA MEJORAR TUS TRABAJO.
            </Typography>
            <Cards />
        </Container>
    </Box>
  );
};

export default Home;

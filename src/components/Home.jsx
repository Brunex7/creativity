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
            <Cards />
        </Container>
    </Box>
  );
};

export default Home;

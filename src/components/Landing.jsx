import React, { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import creativity from '../assets/react.svg';

const Landing = () => {
  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const boxStyle = {
    position: 'relative',
    display: 'flex',
    background: '#220b4e',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  };

  const imageContainerStyle = {
    width: loading ? '20%' : '0%',
    overflow: 'hidden',
    transition: 'width 0.5s ease-in-out',
  };

  const sideImageStyle = {
    width: '100%', // La imagen ocupa el 100% del contenedor
    transform: loading ? 'scale(1)' : 'scale(1.4)', // Escala la imagen
    opacity: loading ? 1 : 0, // Establece la opacidad inicial de la imagen
    transition: 'transform 0.5s ease-in-out, opacity 0.5s ease-in-out',
  };

  const textStyles = {
    opacity: loading ? 0 : 1, // Establece la opacidad inicial del texto
    transition: 'opacity 0.5s ease-in-out',
  };

  return (
    <Box id="landing" sx={boxStyle}>
      <Container style={imageContainerStyle}>
        <img
          id="side-image"
          src={creativity}
          alt="Side Image"
          style={sideImageStyle}
        />
      </Container>
      <Typography variant="h2" color="#fff" style={textStyles}>
        Creativity.
      </Typography>
    </Box>
  );
};

export default Landing;
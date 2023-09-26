import React from 'react';
import creativity from '../assets/react.svg';
import { AppBar, Toolbar, useMediaQuery } from '@mui/material';

function Navbar() {
  const isMobile = useMediaQuery('(max-width: 600px)');

  const imageStyle = {
    width: isMobile ? '10%' : '4%',
    margin: 'auto',
  };

  const styleBox = {
    background: '#220b4e',
    display: 'flex',
    justifyContent: 'center',
    position: 'fixed',
    top: 0,
    width: '100%',
  };

  return (
    <AppBar sx={styleBox}>
      <Toolbar>
        <img
          id="side-image"
          src={creativity}
          alt="Side Image"
          style={imageStyle}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

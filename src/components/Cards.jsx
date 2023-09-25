import React, { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import info from '../media/info';
import { useInView } from 'react-intersection-observer';
import InfoIcon from '@mui/icons-material/Info';
import LaunchIcon from '@mui/icons-material/Launch';

const Cards = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-200px 0px', 
  });

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index] || false,
    }));
  };

  const cardStyle = {
    backgroundColor: '#220b4e',
    width:'350px',
    height:'450px',
    padding:'5px',
    animation: 'fade-in 3.0s ease-in-out',
    position: 'relative',
    transform: inView ? 'translateY(0)' : 'translateY(100px)', 
    opacity: inView ? 1 : 0,
    transition: 'transform 1s, opacity 1s',
  };

  const containerStyle = {
    margin: '30px 0 30px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const cardContentStyle = {
    backgroundColor: 'rgba(54, 54, 54, 0.685)',
    color: 'white',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '2px', 
    zIndex: 1,
    width: '92%',
    height: '50%', 
    borderRadius:'10px',
    backdropFilter: 'blur(10px)',
    display:'flex',
    alignItems:'center',
    flexDirection:'column',
    justifyContent:'center',
    padding:'5px'
  };

  const hiddenCardContent = {
    display:'none',
  }

  const buttonStyle = {
    backgroundColor: 'none',
    color: '#ffffff',
    borderRadius:'5px',
    marginTop:'-8px',
    '&:hover': {
      backgroundColor: '#220b4e',
      color: '#adadad',
    },
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const imageStyle = {
    width: '100%',
    height: '420px',
    objectFit:'cover',
  };

  const imageStyleD = {
    width: '60px',
    height: '60px',
    objectFit:'cover',
    borderRadius:'5px',
  };

  const contButtom = {
    display:'flex',
    alignItems:'center',
    marginLeft:'-30px'
  }

  return (
      <Box id ='project' sx={containerStyle}>
        <div ref={ref} >
          <Grid container spacing={2}>
            {info.map((items, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                  <Card style={cardStyle}>
                <div style={imageContainerStyle}>
                  <CardMedia
                    style={imageStyle}
                    component="img"
                    image={items.image}
                    alt="Project Image"
                  />
                </div>
                <CardContent style={showDescription[index] ? cardContentStyle : hiddenCardContent}>
                  <CardMedia 
                    style={imageStyleD}
                    component="img"
                    image={items.image}
                    alt="Project Image"
                  />
                  <Typography variant='h3' align='left'>{items.title}</Typography>
                  <Typography variant="body4" align='center'>{items.description}</Typography>
                </CardContent>
                  <CardActions sx={contButtom}>
                  <Button
                  href={items.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={ buttonStyle }
                  >
                    <LaunchIcon />
                  </Button>
                  <Button onClick={() => toggleDescription(index)} sx={ buttonStyle }>
                    <InfoIcon />
                  </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
    </Box>
  );
};

export default Cards;
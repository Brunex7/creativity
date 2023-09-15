import React, { useEffect } from 'react';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import info from '../media/info';
import { useInView } from 'react-intersection-observer';

const Cards = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: '-200px 0px', 
  });

  const cardStyle = {
    backgroundColor: '#220b4e',
    width:'350px',
    height:'450px',
    padding:'5px',
    animation: 'fade-in 3.0s ease-in-out',
    borderRadius: '10px',
    position: 'relative',
    transform: inView ? 'translateY(0)' : 'translateY(100px)', 
    opacity: inView ? 1 : 0,
    transition: 'transform 1s, opacity 1s',
  };

  const containerStyle = {
    width:'900px',
    margin: '30px 0 30px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 10px 0 10px', 
  };

  const descriptionStyle = {
    position: 'absolute',
    width: '90%',
    padding: '0 0 0 18px',
    textAlign: 'left',
    color: 'white',
    fontSize:'12px'
  };

  const buttonStyle = {
    backgroundColor: '#555555e2',
    width:'30%',
    color: '#ffffff',
    fontSize:'12px',
    borderRadius:'5px',
    marginTop:'-50px',
    marginLeft:'10px',
    '&:hover': {
      backgroundColor: '#220b4e',
      color: '#ffffff',
    },
  };

  const imageContainerStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: ' 10px 10px 0 0',
  };

  const imageStyle = {
    width: '100%',
    height: '450px',
    objectFit:'cover',
  };

  const contButtom = {
    display:'flex',
    padding:'0',
    alignItems:'center',
    marginTop:'5px'
  }

  return (
      <Box id ='project' sx={containerStyle}>
        <div ref={ref} >
          <Grid container spacing={30}>
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
                  <CardContent style={descriptionStyle}>
                    <Typography variant="body4" color="white">
                      {items.description}
                    </Typography>
                  </CardContent>
                  <CardActions sx={contButtom}>
                  <Button
                  href={items.deployLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={ buttonStyle }
                  >
                      Go to link
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
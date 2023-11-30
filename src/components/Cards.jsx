import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import LaunchIcon from "@mui/icons-material/Launch";
import CloseIcon from '@mui/icons-material/Close';

const Cards = ({items, index, toggleDescription, showDescription}) => {

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-200px 0px",
  });

  const cardStyle = {
    backgroundColor: "#220b4e",
    width: "340px",
    height: "450px",
    borderRadius:'10px',
    padding: "5px",
    animation: "fade-in 3.0s ease-in-out",
    position: "relative",
    transform: inView ? "translateY(0)" : "translateY(100px)",
    opacity: inView ? 1 : 0,
    transition: "transform 1s, opacity 1s",
    perspective: "1000px",
  };

  const cardContentStyle = {
    backgroundColor: "#220b4e",
    color: "white",
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    transform: "rotateY(0deg)",
    backfaceVisibility: "hidden",
    borderRadius: "10px",
    backdropFilter: "blur(10px)",
    transition: "transform 0.5s",
  };

  const buttonStyle = {
    backgroundColor: "none",
    color: "#ffffff",
    borderRadius: "0 0 5px 5px",
    width:'100%',
    marginTop:'5px',
    "&:hover": {
      backgroundColor: "#a89bff",
      color: "#220b4e",
    },
  };

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "410px",
    borderRadius:'5px',
    objectFit: "cover",
  };

  const imageStyleD = {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const closeButton ={
    left:'250px',
    top:'30px',
    backgroundColor: "none",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#220b4e",
      color: "#a89bff",
    },
  }

  return (
      <div ref={ref}>
              <Card  style={cardStyle}>
                <CardActionArea  onClick={() => toggleDescription(index)}>
                <div style={imageContainerStyle}>
                  <CardMedia
                    style={imageStyle}
                    component="img"
                    image={items.image}
                    alt="Project Image"
                    />
                </div>
                </CardActionArea>
                <CardContent
                  style={
                    showDescription[index]
                      ? cardContentStyle
                      : { ...cardContentStyle, transform: "rotateY(180deg)" }
                  }
                >
                  {showDescription[index] ? (
                    <div> 
                       <Button
                       onClick={() => toggleDescription(index)}
                       sx={closeButton}
                      >
                        <CloseIcon />
                      </Button>
                      <CardMedia
                        style={imageStyleD}
                        component="img"
                        image={items.image}
                        alt="Project Image"
                      />
                      <Typography variant="h3" align="left">
                        {items.title}
                      </Typography>
                      <Typography variant="body4" align="center">
                        {items.description}
                      </Typography>
                    </div>
                  ) : (
                    <div style={imageContainerStyle}>
                      <CardMedia
                        style={imageStyle}
                        component="img"
                        image={items.image}
                        alt="Project Image"
                      />
                    </div>
                  )}
                </CardContent>
                  <Button
                    href={items.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={buttonStyle}
                  >
                    <LaunchIcon />
                  </Button>
              </Card>
        </div>
  );
};

export default Cards;

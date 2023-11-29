import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useInView } from "react-intersection-observer";
import InfoIcon from "@mui/icons-material/Info";
import LaunchIcon from "@mui/icons-material/Launch";
import info from "../media/info";

const Cards = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [ref, inView] = useInView({
    triggerOnce: false,
    rootMargin: "-200px 0px",
  });

  const [showDescription, setShowDescription] = useState({});

  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index] || false,
    }));
  };

  const [currentPage, SetCurrentPage] = useState(0);
  const projectsPages = 6;

  const totalPages = Math.ceil(info.length / projectsPages);
  const indexOfLastProject = (currentPage + 1) * projectsPages;
  const indexOfFirstProject = indexOfLastProject - projectsPages;
  const currentProjects = info.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    SetCurrentPage(pageNumber)
  };

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

  const containerStyle = {
    margin: "30px 30px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
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
    borderRadius: "5px",
    marginTop: "-8px",
    "&:hover": {
      backgroundColor: "#220b4e",
      color: "#a89bff",
    },
  };

  const imageContainerStyle = {
    position: "relative",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%",
    height: "420px",
    borderRadius:'5px',
    objectFit: "cover",
  };

  const imageStyleD = {
    width: "90px",
    height: "90px",
    objectFit: "cover",
    borderRadius: "10px",
  };

  const contButtom = {
    display: "flex",
    alignItems: "center",
    marginLeft: "-30px",
  };

  return (
    <Box id="project" sx={containerStyle}>
      <div ref={ref}>
        <Grid container spacing={4}>
          {currentProjects.map((items, index) => (
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
                <CardContent
                  style={
                    showDescription[index]
                      ? cardContentStyle
                      : { ...cardContentStyle, transform: "rotateY(180deg)" }
                  }
                >
                  {showDescription[index] ? (
                    <div>
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
                <CardActions sx={contButtom}>
                  <Button
                    href={items.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={buttonStyle}
                  >
                    <LaunchIcon />
                  </Button>
                  <Button
                    onClick={() => toggleDescription(index)}
                    sx={buttonStyle}
                  >
                    <InfoIcon />
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        <div style={{ marginTop: '20px', display:'flex', justifyContent:'center' }}> 
          {Array.from({ length: totalPages}, (_, index) => (
            <Button key={index} onClick={() => paginate(index)}
            sx={{
              margin:'0 5px',
              backgroundColor: currentPage === index ? '#220b4e' : '#d4cdff',"&:hover": {
                backgroundColor: '#a89bff',
                color: "#d4cdff",
              },
              color: currentPage === index ? '#ffffff' : '#220b4e',
            }}>
              {index + 1}
            </Button>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default Cards;

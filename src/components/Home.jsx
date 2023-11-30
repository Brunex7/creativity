import React, { useEffect, useState } from "react";
import { Container, Box, Typography, Grid, Button } from "@mui/material";
import Cards from "./Cards";
import About from "./About";
import info from "../media/info";


const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const [showDescription, setShowDescription] = useState({});
  const [currentPage, SetCurrentPage] = useState(0);
  const [filterId, setFilterId] = useState(null);

  const filterById = (pagesId) => {
    if(pagesId === filterId) {
      setFilterId(null);
      setFilterPages(info.slice(indexOfFirstProject, indexOfLastProject))
      SetCurrentPage(0);
    }else{
      setFilterId(pagesId);
      const filtered = info.filter((items) => items.id === pagesId);
      setFilterPages(filtered);
      SetCurrentPage(0);
    }
  };

  const toggleDescription = (index) => {
    setShowDescription((prevState) => ({
      ...prevState,
      [index]: !prevState[index] || false,
    }));
  };

  const projectsPages = 6;

  const totalPages = Math.ceil(info.length / projectsPages);
  const indexOfLastProject = (currentPage + 1) * projectsPages;
  const indexOfFirstProject = indexOfLastProject - projectsPages;
  const currentProjects = filterId
  ? info.filter((items) => items.id === filterId)
  : info.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber) => {
    SetCurrentPage(pageNumber)
  };

  const containerStyle = {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const superconte ={
    display:'flex',
    flexDirection:'column',
    marginTop:'90px',
  }

  const sidebar ={
    width:'100%',
    height:'60px',
    border:'2px solid #220B4E',
    borderRadius:'10px',
    color:'#220B4E',
    display:'flex',
    alignItems:'center',
  }

  const buttonStyle ={
    margin:'0 5px',
    backgroundColor: 'none',
    "&:hover": {
      backgroundColor: '#a89bff',
      color: "#d4cdff",
    },
    color: '#220b4e',
  }

  const activeButtonStyle = {
    backgroundColor: '#220b4e',
    color: '#ffffff',
  };

  return (
    <Container sx={superconte}>
      <Container sx={sidebar}>
        <Typography variant="h5" sx={{marginRight:'20px', fontFamily:'robotoBold'}}> Filters</Typography>
          <Button onClick={() => filterById(null)} sx={filterId === null ? {...buttonStyle, ...activeButtonStyle}: buttonStyle}>All</Button>
          <Button onClick={() => filterById(1)}  sx={filterId === 1 ? {...buttonStyle, ...activeButtonStyle}: buttonStyle}>Typography</Button>
          <Button onClick={() => filterById(2)}  sx={filterId === 2 ? {...buttonStyle, ...activeButtonStyle}: buttonStyle}>Ideas</Button>
          <Button onClick={() => filterById(3)}  sx={filterId === 3 ? {...buttonStyle, ...activeButtonStyle}: buttonStyle}>Colors</Button>
          <Button onClick={() => filterById(4)}  sx={filterId === 4 ? {...buttonStyle, ...activeButtonStyle}: buttonStyle}>Mockups</Button>
      </Container>
      <Box sx={containerStyle}>
        <Grid container spacing={4}>
          {currentProjects.map((items, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} style={{ marginTop: '20px', display:'flex', justifyContent:'center' }}> 
            <Cards 
            key={index}
            items={items}
            index={index}
            toggleDescription={toggleDescription}
            showDescription={showDescription}
            />
          </Grid>
          ))}
          </Grid>
        </Box>
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
      <About />
      <Typography variant="h7" fontWeight={'bold'} color='#220B4E' display={'flex'} justifyContent={'center'} marginBottom={'30px'}>Expande tu creatividad al 100% con CREATIVITY.</Typography>
    </Container>
  );
};

export default Home;

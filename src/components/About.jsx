import { Container, Typography } from "@mui/material";
import React from "react";

function About() {
    const boxStyle = {
      backgroundColor: '#220b4e',
      width: '100%',
      padding:'10px',
      borderRadius:'10px',
      margin:'20px 0 30px 0',
    }

    const div ={
      display: 'flex',
      width: '30%',
      height: '1px',
      background: '#ffffff',
      marginBottom:'10px'
    }

  return (
    <Container sx={ boxStyle }>
      <Typography variant="h2" color= '#fff' fontFamily={'robotoBold'}>Creativity.</Typography>
        <div style={div}/>
        <Typography variant="h6" color= '#fff'> Es un proyecto destinado a ser una biblioteca digital para creadores de contenido, diseñadores y programadores frontend. Surge de la necesidad de centralizar recursos esenciales para proyectos creativos. La visión detrás de esta plataforma va más allá de simplemente ofrecer una biblioteca estática. Se trata de simplificar significativamente el proceso creativo, permitiendo a los usuarios acceder rápidamente a herramientas, plantillas, recursos visuales y materiales de referencia necesarios para dar vida a sus proyectos, sin tener que sumergirse en largas y a menudo agotadoras búsquedas en múltiples sitios web.dispersas. </Typography>
    </Container>
  );
}

export default About;

import creativity from '../assets/react.svg';
import { AppBar, Button, Container, Toolbar } from '@mui/material';


function Navbar() {

    const imageStyle = {
        width:'4%',
    }

    const styleBox = {
        background: '#220b4e',
    }

    const conteButton ={
        display: 'flex',
        flexDirection:'row',
        justifyContent:'flex-end'
    }
    
  return (
    <AppBar position="static" sx={styleBox}>
      <Toolbar>
        <img
          id="side-image"
          src={creativity}
          alt="Side Image"
          style={imageStyle}
        />
        <Container sx={conteButton}>
        <Button color="inherit">Home</Button>
        <Button color="inherit">About</Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

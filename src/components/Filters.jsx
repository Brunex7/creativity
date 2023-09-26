import { Box, Button } from '@mui/material';


function Filter() {

    const conteButton ={
        display: 'flex',
        flexDirection:'row',          
        justifyContent:'space-between',          
        padding:'10px',
        alingItems:'center', 
        marginTop:'60px',
    }
    
    return (
        <Box sx={conteButton}>
            <Button color="inherit">Filters</Button>
            <Button color="inherit">About</Button>
        </Box>
    );
}

export default Filter;
import { Box, Button } from '@mui/material';


function Filter() {

    const conteButton ={
        display: 'flex',
        flexDirection:'row',
        border:'2px solid #220b4e',
        padding:'10px',
    }
    
    return (
        <Box sx={conteButton}>
            <Button color="inherit">Filters</Button>
        </Box>
    );
}

export default Filter;
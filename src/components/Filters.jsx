import { Box, Button } from '@mui/material';


function Filter() {

    const conteButton ={
        display: 'flex',
        flexDirection:'row',
        padding:'10px',
    }
    
    return (
        <Box sx={conteButton}>
            <Button color="inherit">Filters</Button>
        </Box>
    );
}

export default Filter;
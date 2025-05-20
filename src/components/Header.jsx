import { Typography,Box } from "@mui/material";

function Header() {
    return ( 
        <>
        <Box sx={{p:2,borderBottom:0.5}}>
           <Typography variant="h2" sx={{fontSize:"1rem",fontWeight:500,ml:{sm:1,md:5,xl:45}}}>
                Manage your venues
           </Typography>
        </Box>
        
        </>
     );
}

export default Header;
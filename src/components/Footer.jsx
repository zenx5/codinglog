import { AppBar, Toolbar, Typography } from "@mui/material";


export default function Footer(){
    return(
        
            <Toolbar component="footer"    sx={{ borderTop:1, borderColor:'divider' }}>
                <Typography style={{ width:'100%',textAlign: 'center' }}>Powered by Kavav</Typography>
            </Toolbar>
    
    );
}
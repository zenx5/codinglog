import { React } from 'react'
import { Box, AppBar, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material'
import { Menu, AccountCircle } from '@mui/icons-material'
import {theme} from '../styles/theme'


export default function Header() {
    return (
        
        <AppBar position='static' color="primary" >
            <Toolbar>
                <Typography sx={{ flexGrow: 1 }}>Coding Log</Typography>
                <IconButton>
                    <AccountCircle/>
                </IconButton>
            </Toolbar>
        </AppBar>
        
    );
  }
  
import React from 'react'
import { Card, CardMedia, CardContent, TextField, Button } from '@mui/material'
import { Avatar } from '@mui/material';
import loginbutton from '../assets/img/loginbutton.png';

export default function Login() {
    return (

<Card variant="card-login">
<CardMedia variant="for-login"><Avatar variant='avatar-login'><img src={loginbutton} alt="" /></Avatar></CardMedia>
<CardContent variant="content-login">
<TextField id="standard-search" label="Email" type="email"  variant="outlined"></TextField>
<TextField
    id="filled-password-input"
    label="Password"
    type="password"
    autoComplete="current-password"
    variant="outlined"
    />
   <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 1.5, mb: 1 }}
      >
        Sign In
      </Button>

    </CardContent>
   </Card> 
   )
   }
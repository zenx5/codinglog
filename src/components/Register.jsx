import React from 'react';
import { TextField, Grid, Card, CardContent, Button, FormControlLabel, Checkbox, Typography } from '@mui/material';



export default function Register()
{
  

    return (
    
<Card variant="card-register">

<CardContent>

<Typography variant="hero-register" sx={{ mt: 1.5, mb: 1 }}>Registrate</Typography>

<Grid container direction="row"
justifyContent="center" alignItems="center" wrap="nowrap">
 
<TextField id="name" label="Nombres" modif="form-name"/>

 <TextField id="lname" label="Apellidos" modif="form-name"/>

</Grid>

<TextField id="email" type="email" label="Email" modif="form-email-password"/>

<TextField id="password" label="Contraseña" type="password" modif="form-email-password"/>

<TextField id="c-password" label="Confirmar Contraseña" type="password" modif="form-email-password"/>

<FormControlLabel
          value="end"
          control={<Checkbox />}
          label="Acepto los terminos de uso y política de privacidad"
          labelPlacement="start"
         sx={{display:'flex', justifyContent:'center'}} />

<Button
        type="submit"
        fullWidth
        modifi="boton"
        sx={{':hover':{backgroundColor:'#1976d2',boxShadow: 5} ,mt: 1.5, mb: 1 }}
      >
        Sign In
      </Button>

</CardContent>


</Card>

     )
}
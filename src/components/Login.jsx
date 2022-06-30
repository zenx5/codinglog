import { Button, Card, Grid, TextField } from "@mui/material"

export default function Login(){


    return(
        <Card variant="for-login" >
        <Grid container >
            <Grid item xs={12}>
                <TextField type="text"></TextField>
            </Grid>
            <Grid item xs={12}>
            <TextField type="password"></TextField>
            </Grid>
            <Grid item xs={12}>
                <Button variant="contained">Sign in</Button>
            </Grid>
        </Grid>
        </Card>
    )

}
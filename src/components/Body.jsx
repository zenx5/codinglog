
import { Grid} from "@mui/material";
import Content from './Content'
import Menu from './Menu'
import {menus} from '../routes/menus'

export default function Body(){
    
    

    return(
        <Grid container>
            <Grid item xs={2}>
                <Menu menus={menus} border={true} />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={9} style={{height:'100%'}}>
                <Content />
            </Grid>
        </Grid>
    );
}
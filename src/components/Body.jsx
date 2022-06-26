import { Grid, Tabs, Tab} from "@mui/material";
import { useState } from "react";
import Content from './Content'


export default function Body(){
    
    const [tab, setTab] = useState(0)

    const handleChange = (event, value) => {
        setTab(value);
    }

    return(
        <Grid container>
            <Grid item xs={2}>
                <Tabs 
                    value={tab}
                    orientation="vertical"
                    onChange={handleChange}
                    sx={{ borderRight:1, borderBottom:1, borderColor:'divider' }}>
                    <Tab label="opcion 1"/>
                    <Tab label="opcion 2"/>
                    <Tab label="opcion 3"/>
                </Tabs>                
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={9} style={{height:'100%'}}>
                <Content />
            </Grid>
        </Grid>
    );
}
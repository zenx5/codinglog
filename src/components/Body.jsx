import { useState } from "react";
import { Grid, Tabs, Tab} from "@mui/material";
import Content from './Content'

export default function Body(){
    const [tab, setTab] = useState(0)

    const handleChange = (event, value) => {
        setTab(value);
    }

    return(
        <Grid container>
            <Grid item xs={1}>
                <Tabs
                    orientation="vertical"
                    value={tab}
                    onChange={handleChange}
                    sx={{ borderRight:1, borderBottom:1, borderColor:'divider' }}
                >
                    <Tab label="Item One"/>
                    <Tab label="Item Two"/>
                    <Tab label="Item Three"/>
                </Tabs>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{height:'100%'}}>
                <Content />
            </Grid>
        </Grid>
    );
}
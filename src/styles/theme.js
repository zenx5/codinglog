import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette:{
        
    },
    typography:{},
    components:{
        MuiGrid:{
            variants:[
                {
                    props:{
                        variant:'codinglog-header'
                    },
                    style:{
                        height:'70px',
                        border:'1px solid black',
                        

                    }
                }
            ]
        }
    }
})
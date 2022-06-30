import { createTheme } from "@mui/material/styles";


export const theme = createTheme({
    palette:{
        
    },
    typography:{},
    components:{
        MuiCard:{
            variants:[
                {
                    props:{
                        variant:'for-login'
                    },
                    style:{
                        width:'50%',
                        margin: '50px auto 50px auto',
                        MuiGrid:{
                            width:'80%',
                            marginLeft:'auto',
                            marginRight:'auto'
                        }
                    }
                }
            ]
        },
        MuiTextField:{
            variants:[
                {
                    props:{
                        type:'text'
                    },
                    style:{
                        width:'100%',
                        marginBottom: '10px'
                    }
                },
                {
                    props:{
                        type:'password'
                    },
                    style:{
                        width:'100%',
                        marginBottom: '10px'
                    }
                }
            ]
        },
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
        },
        MuiTabs:{
            variants:[
                {
                    props:{
                        variant:'menu-multiple'
                    },
                    style:{
                        width:'100%',
                        button:{
                            padding:0
                        }
                    }
                }
            ]
        }
    }
})
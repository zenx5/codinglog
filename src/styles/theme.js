import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { hover } from "@testing-library/user-event/dist/hover";



export const theme = createTheme({
    palette:{
        
    },
    typography:{},
    components:{
        

        MuiButton:{
            variants:[
                {
                    props:{
                        variant:'contained'
                        
                    },
                    style:{
                        width:'20vw',
                        padding:'11px 0 11px 0',
                        margin:'0',
                       
                        }
                }
                ,
                {
                    props:{
                        modifi:'boton'
                        
                    },
                    style:{
                        width:'30vw',
                        padding:'11px 0 11px 0',
                        margin:'0 auto',
                        display:'flex',
                        justifyContent:'center',
                       color:'#fff',
                       backgroundColor:'#1976d2'
                        }
                }
            ]
        }
        
        ,

        MuiTextField:{
            variants:[
                {
                    props:{
                        variant:'outlined',
                      
                    },
                    style:{
                        width:'20vw',
                        padding:'11px 0px 11px 0px',
                        display:'flex',
                        justifyContent:'center',
                    }
                }
                ,
                {
                props:{
                    
                    modif:'form-name'
                    
                },
                style:{
                    width:'14.4vw',
                    padding:'11px 8px 11px 8px',
                    display:'flex',
                    justifyContent:'center',
                }
              }
              ,
              {
              props:{
                  
                  modif:'form-email-password'
                  
              },
              style:{
                  width:'30vw',
                  padding:'11px 0px 11px 0px',
                  
                  margin:'0 auto',
              }
            }

            ]
        }
        
        ,

        MuiCard:{
            variants:[
                {
                    props:{
                        variant:'card-login'
                      
                        },
                        
                        style:{
                        width:'30vw',
                        border:'1px solid black',
                        backgroundColor:'#F4F6F7',
                        display:'flex',
                        justifyContent:'center' , 
                        margin:'0 auto',  
                        padding:'0',
                       flexDirection:'column' ,  
                        
        
                    }    
                }
                    ,
                    {
                    props:{
                        variant:'card-register'
                      
                        },
                        
                        style:{
                        width:'36vw',
                        border:'1px solid black',
                        backgroundColor:'#F4F6F7',
                        display:'flex',
                        justifyContent:'center' , 
                        margin:'0 auto',  
                        padding:'0',
                       flexDirection:'column' ,
                        
                    }
                }
            ]
        }
        
        ,
     
        MuiCardMedia:{
            variants:[
                {
                    props:{
                        variant:'for-login'
                        
                    },
                    style:{
                        
                        display:'flex',
                        justifyContent:'center' , 
                        padding:'2rem 0 2rem 0',
                                                  

                    }
                }
            ]
        }
        
        ,
    
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

        ,
        
        MuiAvatar:{
            variants:[
                {
                    props:{
                        variant:'avatar-login'
                        
                    },
                    style:{
                        width:'8vw',
                        height:'8vw',
                        display:'flex',
                        justifyContent:'center' , 
                                                     

                    }
                }
            ]
        }
        
        ,

        MuiCardContent:{
            variants:[
                {
                    props:{
                        variant:'content-login'
                        
                    },
                    style:{
                              padding:'0', 
                              display:'flex',
                              justifyContent:'center',
                              alignItems:'center', 
                              flexDirection:'column',             

                    }
                }
            ]
        }
        
        ,

        MuiTypography:{
            variants:[
                {
                    props:{
                    variant:'hero-register'
                        
                    },
                    style:{
                  display:'flex',
                  justifyContent:'center',
                  fontSize:'3vw',
                       
                        }
                }
                ,
                {
                    props:{
                  
                        
                    },
                    style:{
                 
                        }
                }
            ]
        }

    }
})




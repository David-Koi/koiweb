import React, {useContext}from "react";
import { Grid, Box, Button } from "@mui/material";
import { GlobalContext } from "../../context/Globalcontext";

export const UserBar = ({user, reset}) => {

    const { 
        WarningColor, darkMode, 
        setDarkMode, correctConnection 
    } = useContext(GlobalContext);

    const foto = require('../../assets/avatars/zebra.jpg');

    const logout = () => {
        localStorage.removeItem("token");
        reset();
        //llamada de borrado de usuario
    };

    return(
        <Grid md={10} 
            style={{
                // backgroundColor:'tomato',
                height:'100%',
                display: 'flex',
                justifyContent:'flex-end',
                alignItems:'center',
            }}
        >
            <Grid md={2} style={{display:'flex', justifyContent:'flex-end', flexDirection:'column', alignItems:'center'}}>
                <div 
                    style={{ 
                        width:'60px', 
                        height:'60px',
                        border:`2px solid ${WarningColor}`, 
                        borderRadius:'100%',
                        backgroundImage:`url(${foto})`,
                        backgroundPosition : 'center',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover',
                    }}
                ></div>
                
            </Grid>
            <Grid md={3}>
                <h2 
                    style={{
                        textAlign:'left',
                        margin:'0%',
                        color: darkMode ? WarningColor : 'black',
                        fontFamily:'monospace'
                    }}
                >{user?.userName}</h2>
                <p style={{fontSize:'10px', margin:'0%', textAlign:'left'}}>
                    <a href="https://www.freepik.com/free-vector/variety-animal-avatars_766787.htm#query=animal%20avatars&position=2&from_view=keyword&track=ais" 
                    target="_blank"
                    style={{textDecoration:'none',
                    color: darkMode ? 'white' : 'black'}}
                    >Image by Freepik.com</a>
                </p>
            </Grid>
            <Grid md={2}>
                <Button
                    size="small" 
                    variant="outlined" color="warning" 
                    href="#outlined-buttons"
                    sx={{borderRadius:'20px'}}
                    onClick={()=> logout()}
                >Log out</Button>
            </Grid>
        </Grid>
    );
};
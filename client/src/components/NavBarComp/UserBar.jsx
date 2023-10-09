import React, {useContext}from "react";
import { Grid, Box, Button } from "@mui/material";
import { GlobalContext } from "../../context/Globalcontext";

export const UserBar = ({user, reset}) => {

    const { 
        WarningColor, darkMode, 
        setDarkMode, correctConnection 
    } = useContext(GlobalContext);

    const foto = require('../../assets/images/blood.jpeg');

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
            <Grid md={6} style={{display:'flex', justifyContent:'center'}}>
                <div 
                    style={{ 
                        width:'90px', 
                        height:'90px', borderRadius:'100%',
                        backgroundImage:`url(${foto})`,
                        backgroundPosition : 'center',
                        backgroundRepeat:'no-repeat',
                        backgroundSize:'cover'
                    }}
                ></div>
            </Grid>
            <Grid md={4}>
            <h2>{user?.userName}</h2>
            </Grid>
            <Grid md={2}>
            <Button onClick={(e)=> logout()}>Log out</Button>
            </Grid>
        </Grid>
    );
};
import React, { useEffect, useState } from "react";
import { GlobalContext } from "../context/Globalcontext";
import { NavBar } from "./NavBarComp/NavBar";
import { DemosMain } from "./DemosComp/DemosMain";
import { Grid, Box, Button } from "@mui/material";
import '../css/fontStyle.css';  
import "../css/Main.css";

export const Main =()=>{

    const WarningColor = '#ED6C02';
    const [darkMode, setDarkMode] = useState(false);

    return(
            <GlobalContext.Provider 
                value={{
                    WarningColor,
                    darkMode, 
                    setDarkMode,
                }}
            >
                <Box style={{height:'100vh'}}>
                    <Grid id='navBar' style={{height:'10%'}}>
                        <NavBar/>
                    </Grid>
                    <Grid id='demo' style={{height:'90%'}}>
                        <DemosMain/>
                    </Grid>
                </Box>
            </GlobalContext.Provider>
    );
}
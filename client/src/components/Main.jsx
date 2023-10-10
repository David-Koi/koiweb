import React, { useEffect, useState } from "react";
import { GlobalContext } from "../context/Globalcontext";
import axios from "axios";
import { NavBar } from "./NavBarComp/NavBar";
import { DemosMain } from "./DemosComp/DemosMain";
import { Grid, Box, Button } from "@mui/material";
import '../css/fontStyle.css';  
import "../css/Main.css";

export const Main =()=>{

    /** 
     * @description check database status.
     */
    const checkDB = async () => {
        axios
            .get("http://localhost:4000/")
            .then((res)=>{
                if(res?.status === 200){
                    setCorrecconection(true);
                };
            })
            .catch((error)=>{
                setCorrecconection(false);
            })
    };
    
    const [ correctConnection, setCorrecconection ] = useState(false);
    const WarningColor = '#ED6C02';
    const [darkMode, setDarkMode] = useState(false);
    const [logged, setLogged] = useState(false);

    useEffect(()=>{
        checkDB();
    },[]);

    return(
            <GlobalContext.Provider 
                value={{
                    WarningColor,
                    darkMode, 
                    setDarkMode,
                    correctConnection,
                    logged, setLogged
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
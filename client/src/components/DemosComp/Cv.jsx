import React, {useEffect, useState, useContext} from "react";
import { GlobalContext } from "../../context/Globalcontext";
import { Grid, Box, Button } from "@mui/material";
import "../../css/Cv.css";
import { GitHub } from "@mui/icons-material";

export const Cv = () => {

    const { 
        WarningColor, darkMode, 
        setDarkMode, correctConnection,
        logged, setLogged,
    } = useContext(GlobalContext);

    const abilities = [
        'JavaScript', 'REACT', 'NODEjs', 
        'HTML', 'CSS', 'MySql', 'Git',
        'Scrumm','Mui Material'
    ];

    const exp = [
        'EnerClic'
    ];

    return(
        (!logged ?
            <Grid container style={{alignContent:'flex-start'}} md={12}>
                <Grid item style={{}} md={12}>
                    <h1 className="introTitle">Full Stack Web Developer</h1> 
                </Grid>
                <Grid md={12} style={{}} item className="abilities">
                    <h2 className="introTitle2" style={{color: darkMode ? WarningColor : 'black'}}>Skills</h2>
                    {abilities.map((elm, key)=>{
                        return <h3 id={`s${key}`} className="typing" style={{color: darkMode ? WarningColor : 'black'}}>{elm}</h3> 
                    })} 
                </Grid>
                <Grid md={12} style={{}} item className="experience">
                    <h2 className="introTitle2" style={{color: darkMode ? WarningColor : 'black'}}>Experiencia</h2>
                    {exp.map((elm, key)=>{
                        return <h3 id={`e${key}`} className="typing" style={{color: darkMode ? WarningColor : 'black'}}>{elm}</h3> 
                    })} 
                </Grid>
            </Grid>
        :
            <></>
        )
        
    );
};
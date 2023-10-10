import React, {useEffect, useState, useContext} from "react";
import { Grid, Box, Button } from "@mui/material";
import "../../css/Cv.css";

export const Cv = () => {

    const aus = ['JavaScript', 'REACT', 'NODEjs', 'HTML', 'CSS'];

    return(
        <Grid container md={12}>
            <Grid md={12} item >
                <h1 className="introTitle">Full Stack Web Developer</h1> 
                <h2 className="introTitle2">Hablidades</h2>
                {aus.map((elm, key)=>{
                    return <h3 id={`s${key}`} className="typing">{elm}</h3> 
           })} 
               

            </Grid>
        </Grid>
    );
};
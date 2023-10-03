import React, {useEffect, useState, useContext} from "react";
import masbebet_koi_video from "../../assets/videos/masbebet_koi_video.mp4";
import { GlobalContext } from "../../context/Globalcontext";
import "../../css/DemosMain.css";
import "../../css/BlackGradiente.css";
import { Grid, Box, Button } from "@mui/material";

export const DemosMain = () => {

    const { darkMode } =useContext(GlobalContext);
    const [backClass, setBackClass] = useState('whiteGradiente');

    useEffect(()=>{
        console.log(darkMode)
        darkMode ? setBackClass('blackGradiente') : setBackClass('whiteGradiente') ;
    },[darkMode]);

    useEffect(()=>{
        console.log(backClass)
    },[backClass]);

    return(
    <>
        <Grid
            className={backClass}
            style={{
                width:'100%', height:'100%', display:'flex', 
                justifyContent:'center',
            }}
        >
            <Grid
                style={{
                    display:'flex', 
                    justifyContent:'center',
                }}
            >

            </Grid>
            <video src={masbebet_koi_video}
                autoplay="true" muted="true" 
                loop="true" poster=""
            ></video>
            {/* <section id="sect1" class="sect">
                <h1>Sección primera - Con vídeoaaaaaaaaaaaaa</h1>
            </section>  */}

        </Grid>
    </>
      
    );
};
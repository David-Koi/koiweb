import React, {useEffect, useState, useContext} from "react";
import masbebet_koi_video from "../../assets/videos/masbebet_koi_video.mp4";
import { GlobalContext } from "../../context/Globalcontext";
import "../../css/DemosMain.css";
import "../../css/BlackGradiente.css";
import { Grid, Box, Button } from "@mui/material";

export const DemosMain = () => {

    const { WarningColor, darkMode, correctConnection } =useContext(GlobalContext);
    const [backClass, setBackClass] = useState('whiteGradiente');

    useEffect(()=>{
        darkMode ? setBackClass('blackGradiente') : setBackClass('whiteGradiente') ;
    },[darkMode]);

    return(
    <>
        <Grid 
            className={backClass}
            style={{
                height:'100%', display:'flex',
                flexDirection:'column', 
                justifyContent:'center',
            }}
        >
            {/* CONTAINER*/}
            <Grid
                style={{
                    display:'flex', 
                    justifyContent:'center',
                    minHeight:'93%',
                }}
            >
                <p></p>
            </Grid>
            {/* DATABASE STATUS*/}
            <Grid container id='demo' 
                style={{ 
                    display:'flex', 
                    justifyContent:'space-between',
                    alignItems:'center',
                }}
            >
                <Grid item md={6}
                    style={{ 
                    display:'flex', 
                    alignItems:'center', 
                    justifyContent:'flex-start',
                    }}
                >
                    <p style={{color:'white', marginLeft:'10px'}}>
                        <a 
                            href="https://pixabay.com/users/masbebet-5633372/"
                            style={{color:'white', textDecoration:'none'}}
                            target="_blank"
                        >®video copyright belongs to Masbebet </a>
                    </p>
                </Grid>

                <Grid md={6} 
                    style={{
                        display:'flex',
                        alignItems:'center', 
                        justifyContent:'flex-end'
                    }}
                >
                    <p style={{color: darkMode ? WarningColor : 'black'}}>DataBase connection</p>
                    <div 
                        style={{width:'15px', 
                            height:'15px', 
                            borderRadius:'50px',
                            margin:'1%',
                            backgroundColor: 
                                correctConnection === true ? 
                                '#67FF0A' : '#FD0D01',
                        }}
                    ></div>

                </Grid>
            </Grid>
            {/* background video*/}
            <video src={masbebet_koi_video}
                autoplay="true" muted="true" 
                loop="true" poster=""
            ></video>
        </Grid>
    </>
      
    );
};
import React, {useEffect, useState, useContext} from "react";
import masbebet_koi_video from "../../assets/videos/masbebet_koi_video.mp4";
import { GlobalContext } from "../../context/Globalcontext";
import "../../css/DemosMain.css";
import "../../css/BlackGradiente.css";
import { Grid, Box, Button } from "@mui/material";

export const DemosMain = () => {

    const { darkMode, correctConnection } =useContext(GlobalContext);
    const [backClass, setBackClass] = useState('whiteGradiente');

    useEffect(()=>{
        darkMode ? setBackClass('blackGradiente') : setBackClass('whiteGradiente') ;
    },[darkMode]);

    return(
    <>
        <Grid
            className={backClass}
            style={{
                width:'100%', height:'100%', display:'flex',
                flexDirection:'column', 
                justifyContent:'center',
            }}
        >
            <Grid
                style={{
                    display:'flex', 
                    justifyContent:'center',
                    minHeight:'97%',
                }}
            >
                <p>hola</p>
            </Grid>

            <Grid id='demo' 
                style={{height:'1%', 
                    display:'flex', 
                    justifyContent:'flex-end',
                    alignItems:'center',
                    marginBottom:'1%',
                }}
            >
                <p style={{color: darkMode ? 'white' : 'black'}}>DataBase connection</p>
                <div 
                    style={{width:'15px', 
                        height:'15px', borderRadius:'50px',
                        border:`2PX solid ${darkMode ? 'white' : 'black'}`,
                        margin:'1%', 
                        backgroundColor: 
                            correctConnection === true ? 
                            'green' : 'red',
                    }}
                ></div>
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
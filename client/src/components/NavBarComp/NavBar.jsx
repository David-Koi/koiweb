import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../../context/Globalcontext";
import { Grid, Box, Button } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LoginForm } from "./LoginForm";
import TransitionsModal from "./RegisterModal";
import logo from '../../assets/images/koiLogo.png';
import '../../css/NavBar.css';

export const NavBar = () => {

    const { WarningColor, darkMode, setDarkMode } = useContext(GlobalContext);

    const [logged, setLogged] = useState(false);
    const [login, setLogin] = useState(false);

    const [logRegClass, setLogRegClass] = useState('logRegIn'); 

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    const activateLogin = () => {
        // setLogRegClass('logRegOut');
        // setTimeout(()=>{
            setLogged(true);
            setLogin(true);
        // },500);
    };

    const activateRegister = () => {
        setLogRegClass('logRegOut');
        setLogged(true);
        handleOpen();
    };

    const reset = () => {
        setLogRegClass('logRegIn');
        setLogged(false);
        handleClose();
        setLogin(false);
    };

    return(
        <Box 
            style={{
                width:'100%', 
                display:'flex', justifyContent:'center',
                alignContent:'center' 
            }}
        >
            <Grid container md={12} style={{backgroundColor:darkMode ? 'black' : 'white',}}>
                <Grid item md={7} className="logo"
                    style={{
                        display:'flex',
                        justifyContent:'flex-start',
                        alignItems:'center'
                    }} 
                ><img style={{height:'100px'}} src={logo}/>
                <h1 style={{
                    margin:'0px',
                    color:`${WarningColor}`,
                    fontFamily:'Fontasia',
                    fontSize:'60px',
                    fontWeight:'lighter',
                    textAlign:'center' 
                }}>Portfolio David Medina</h1>
                </Grid>
                <Grid item
                    md={5}
                    className="login"
                    style={{
                        display:'flex', justifyContent:'center',
                        alignItems:'center'
                    }}
                >   
                    <Grid md={1} >
                        {login && 
                            <Button 
                                className={'logRegIn'}
                                color="warning"
                                style={{borderRadius:'50%', height:'60px', margin:'0px', padding:'0px'}}
                                onClick={()=> reset()}
                            >{<ArrowForwardIosIcon/>}</Button>
                        }
                    </Grid>
                    {!logged ? 
                        <Grid md={10}
                            style={{
                                display:'flex', justifyContent:'flex-end',
                                alignItems:'center'
                            }}
                            className={logRegClass}
                        >
                            <Button 
                                variant="outlined" color="warning" href="#outlined-buttons"
                                sx={{borderRadius:'20px'}}
                                onClick={()=> activateLogin()}
                            >Iniciar sesión</Button>
                            <Button 
                                variant="outlined" color="warning" href="#outlined-buttons"
                                sx={{marginLeft:'5%', borderRadius:'20px'}}
                                onClick={()=> activateRegister()}
                            >Crear cuenta</Button>
                        </Grid>                
                    :
                        (
                            login ?
                                    <LoginForm/>
                            :
                                (
                                    open &&
                                    <Grid md={10} className={logRegClass}></Grid>
                                )
                        )
                    }
                    <Grid item md={1}
                        style={{
                            display:'flex', justifyContent:'',
                            alignItems:'center'
                        }}
                    >
                        <Button 
                            color="warning"
                            style={{borderRadius:'50%', height:'60px'}}
                            onClick={()=> setDarkMode(!darkMode)}
                        >{darkMode ? 
                            <LightModeIcon className={logRegClass}/> 
                        : 
                            <DarkModeIcon className={logRegClass
                        }/>}</Button>
                    </Grid>                
                </Grid>
            </Grid>
            {open &&
                <TransitionsModal 
                    open={open} 
                    handleOpen={handleOpen} 
                    reset={reset}
                />
            }
        </Box>
    );
}
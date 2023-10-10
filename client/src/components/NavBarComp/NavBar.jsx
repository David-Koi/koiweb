import React, {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../../context/Globalcontext";
import { Grid, Box, Button } from "@mui/material";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { LoginForm } from "./LoginForm";
import RegisterModal from "./RegisterModal";
import { UserBar } from "./UserBar";
import logo from '../../assets/images/koiLogo.jpg';
import '../../css/NavBar.css';

export const NavBar = () => {

    const { 
        WarningColor, darkMode, 
        setDarkMode, correctConnection 
    } = useContext(GlobalContext);

    const [logged, setLogged] = useState(false);
    const [login, setLogin] = useState(false);

    const [logRegClass, setLogRegClass] = useState('logRegIn'); 

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [user, setUser] = useState({});
    const activateLogin = () => {
        setLogged(false);
        setLogin(true);

    };

    const activateRegister = () => {
        setLogRegClass('logRegOut');
        setLogged(false);
        handleOpen();
    };

    const reset = () => {
        setLogRegClass('logRegIn');
        setLogged(false);
        handleClose();
        setLogin(false);
    };

    useEffect(() => {
        setLogRegClass('logRegIn');
        setLogin(false);
        setOpen(false);
    }, [logged])
    
    useEffect(() => {
      console.log(user)
    }, [user])
    

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
                        alignItems:'center',
                        minHeight:'10vh'
                    }} 
                >
                {/* <img style={{height:'100px'}} src={logo}/> */}
                <h1 style={{
                    margin:'0px',
                    color:`${WarningColor}`,
                    fontFamily:'Fontasia',
                    fontSize:'60px',
                    fontWeight:'lighter',
                    textAlign:'center',
                    padding:'1%'
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
                        (login ?    
                            <LoginForm setLogged={setLogged} setUser={setUser}/>
                        :
                            (open ?
                                <Grid md={10} className={logRegClass}></Grid>
                            :    
                                (
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
                                )
                            )
                        )
                    :
                        (
                            <UserBar user={user} reset={reset}/>
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
                <RegisterModal 
                    open={open} 
                    handleOpen={handleOpen}
                    setLogged={setLogged} 
                    reset={reset}
                />
            }
        </Box>
    );
}
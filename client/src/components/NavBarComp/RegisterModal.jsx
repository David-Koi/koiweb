import React, {useState, useContext, useEffect} from 'react';
import axios from 'axios';
import { GlobalContext } from '../../context/Globalcontext';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid, Box, Button } from "@mui/material";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import { veriMail, veriName, veriPass } from '../../helpers/registerForm';
import { loginCall } from './LoginForm';

export default function RegisterModal({
    open, 
    reset,
    setLogged,
}){

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const { WarningColor, darkMode } = useContext(GlobalContext);   

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 500,
        height:500,
        bgcolor: darkMode ? 'black' : 'white',
        borderRadius:'100%',
        border: `2px solid ${WarningColor}`,
        boxShadow: 24,
        p: 4,
    };

    const [userName, setUserName] = useState('');
    const [corectName, setCorrectName] = useState(false);

    const [email, setEmail] = useState('');
    const [corectMail, setCorrectMail] = useState(false);

    const [pass, setPass] = useState('');
    const [corectPass, setCorrectPass] = useState(false);
    const [passMessage, setPassMessage] = useState('')

    const [verifyPass, setVerifyPass] = useState('');
    const [verifyedPass, setVerifyedPass] = useState(false);

    const [loading, setLoading] = useState(false);

    const registerCall = async (obj) => {
        setLoading(true);
        axios
            .post("http://localhost:4000/user/register", obj)
            .then((res)=>{
                if(res?.status === 200){
                    loginCall(obj, setLogged)
                };
            })
            .catch((error)=>{
                console.log(error);
            })
    };

    const send =()=> {
        let aux = {
            userName : userName,
            email : email,
            pass : pass,
        };

        registerCall(aux);
    };

    useEffect(()=>{
        veriName(userName) ? setCorrectName(false) : setCorrectName(true)
    },[userName]);

    useEffect(()=>{
        veriMail(email) ? setCorrectMail(true) : setCorrectMail(false);
    },[email]);

    useEffect(()=>{
        setPassMessage('');
        setCorrectPass(false);
        let aux = veriPass(pass);
        if(pass !== ''){
            if(aux.value){
                setCorrectPass(true);
            }else{
                setPassMessage(aux.message)
            };
        };
    },[pass]);

    useEffect(()=>{
        setVerifyedPass(false)
        if(verifyPass !== ''){
            if(pass === verifyPass){
                setVerifyedPass(true);
            };
        };
    },[verifyPass, pass]);

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                    timeout: 1000,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <Grid md={12} 
                            sx={{
                                height:'100%',
                                display:'flex',
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'center'
                            }}
                        >
                            {/* UserName*/}
                            <FormControl 
                                sx={{ m:2, mb: 5, width: '25ch',
                                    '& .MuiInput-underline:before': { 
                                        borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                                    },  
                                }} 
                                variant="standard"    
                                color="warning"
                            >
                                <InputLabel 
                                    sx={{textAlign:'center',
                                        color: darkMode ? `${WarningColor}` : 'black'
                                    }} 
                                    htmlFor="standard"
                                >{corectName ? 'User name' : 'solo admite letras y números'}
                                </InputLabel>
                                <Input
                                    style={{
                                        color: userName !== '' ? 
                                            (corectName ?
                                                (darkMode ? 
                                                    `${WarningColor}` 
                                                : 
                                                    'black'
                                                )
                                            :
                                                'red'
                                            )
                                        :
                                            (darkMode ? `${WarningColor}` : 'black'),
                                    }}
                                    id="standard"
                                    type={'text'}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <IconButton color="warning">
                                                <AccountCircle />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={
                                        (e)=> {setUserName((prev)=> (prev, e.target.value))}    
                                    }
                                />
                            </FormControl>
                            {/* Mail*/}
                            <FormControl 
                                sx={{ m:2, mb: 5, width: '25ch',
                                    '& .MuiInput-underline:before': { 
                                        borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                                    },  
                                }} 
                                variant="standard"    
                                color="warning"
                            >
                                <InputLabel 
                                    sx={{textAlign:'center',
                                        color: darkMode ? `${WarningColor}` : 'black'
                                    }} 
                                    htmlFor="standard"
                                >{corectMail || email === '' ? 'Mail' : 'formato no válido'}
                                </InputLabel>                        
                                <Input
                                    style={{
                                        color: email !== '' ? 
                                            (corectMail ?
                                                (darkMode ? 
                                                    `${WarningColor}` 
                                                : 
                                                    'black'
                                                )
                                            :
                                                'red'
                                            )
                                        :
                                            (darkMode ? `${WarningColor}` : 'black'),
                                    }}
                                    id="standard"
                                    type={'text'}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <IconButton color="warning">
                                                <MailIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={
                                        (e)=> {setEmail((prev)=> (prev, e.target.value))}    
                                    }
                                />
                            </FormControl>
                            {/* Password*/}
                            <FormControl 
                                sx={{ m:2, mb: 0, width: '25ch',
                                    '& .MuiInput-underline:before': { 
                                        borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                                    }, minHeight:'20%'  
                                }} 
                                variant="standard"    
                                color="warning"
                            >
                                <InputLabel 
                                    sx={{textAlign:'center',
                                        color: darkMode ? `${WarningColor}` : 'black'
                                    }}   
                                    htmlFor="standard-adornment-password"
                                >Password</InputLabel>
                                <Input                                    
                                    style={{
                                        color: pass !== '' ? 
                                            (corectPass ?
                                                (darkMode ? 
                                                    `${WarningColor}` 
                                                : 
                                                    'black'
                                                )
                                            :
                                                'red'
                                            )
                                        :
                                            (darkMode ? `${WarningColor}` : 'black'),
                                    }}                                    
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                        color="warning"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    onChange={
                                        (e)=> {setPass((prev)=> (prev, e.target.value))}    
                                    }
                                />
                                <p style={{textAlign:'center', color:'red', fontSize:'10px'}}>
                                    {passMessage !== '' ? passMessage : ''}
                                </p>
                            </FormControl>
                            {/* Confirm password*/}
                            <FormControl 
                                sx={{ m:0, mb: 5, width: '25ch',
                                    '& .MuiInput-underline:before': { 
                                        borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                                    },  
                                }} 
                                variant="standard"    
                                color="warning"
                            >
                                <InputLabel 
                                    sx={{textAlign:'center',
                                        color: darkMode ? `${WarningColor}` : 'black'
                                    }} 
                                    htmlFor="standard-adornment-password"
                                >{verifyedPass === true || verifyPass === '' ? 'Confirm password' : 'las contraseñas no coinciden.'}
                                </InputLabel>
                                <Input
                                    style={{
                                        color: verifyPass !== '' ? 
                                            (verifyedPass ?
                                                (darkMode ? 
                                                    `${WarningColor}` 
                                                : 
                                                    'black'
                                                )
                                            :
                                                'red'
                                            )
                                        :
                                            (darkMode ? `${WarningColor}` : 'black'),
                                    }}                                     
                                    id="standard-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                    <InputAdornment position="start">
                                        <IconButton
                                        color="warning"
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                    }
                                    onChange={
                                        (e)=> {setVerifyPass((prev)=> (prev, e.target.value))}    
                                    }
                                />
                            </FormControl>
                            {/* Buttons*/}
                            <div 
                                style={{ width:'40%', display:'flex', 
                                    justifyContent:'space-between'
                                }}
                            >
                                <Button 
                                    variant="outlined" 
                                    color="warning" href="#outlined-buttons"
                                    onClick={()=> reset()}
                                >Cancel</Button>
                                <Button variant="outlined" 
                                    color="warning" href="#outlined-buttons"
                                    onClick={(e)=>send()}
                                    disabled={
                                        corectName && 
                                            corectMail && 
                                                corectPass && 
                                                    verifyedPass ? 
                                                    false : true
                                    }
                                >Send</Button>
                            </div>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}


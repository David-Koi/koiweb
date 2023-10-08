import React, {useState, useContext} from "react";
import { GlobalContext } from "../../context/Globalcontext";
import { Grid, Box, Button } from "@mui/material";
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from 'axios';
import "../../css/NavBar.css";

export const loginCall = async(obj)=>{
    console.log(obj)
    axios 
        .post("http://localhost:4000/user/login", obj)
        .then((res)=>{
            if(res?.status === 200){
               console.log(res, ' ok');
            }else if(res?.status === 201){
                console.log(res , ' no ok');

            };
        })
        .catch((error)=>{
            console.log(error);
        })
};

export const LoginForm = () => {

    const { WarningColor, darkMode } = useContext(GlobalContext);

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const [email, setEmail] = useState();
    const [pass, setPass] = useState();
       
    return(
        <>
        <Grid md={10} className={"logRegIn"} style={{
                display:'flex', justifyContent:'left',
                alignItems:'center',
            }}>

            <Grid md={5} style={{
                display:'flex', justifyContent:'center',
                alignItems:'center',marginBottom:4,
                color:'white'
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center',}}>
                    <AccountCircle color='warning' sx={{mr: 1, my: 0.5,marginTop:2 }}/>
                    <TextField text id="input-with-sx" 
                        InputLabelProps={{style:{color: darkMode ? `${WarningColor}` : 'black'}}} color="warning" 
                        label="User email" variant="standard"
                        sx={{
                            '& .MuiInput-underline:before': { 
                                borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                            },
                        }} 
                        inputProps={{
                            style:{color: darkMode ? 'white' : 'black',}
                        }}
                        onChange={(e)=> setEmail((prev)=> (prev, e.target.value))}
                    />
                </Box>
            </Grid> 
            <Grid md={4} 
                style={{
                display:'flex', justifyContent:'',
                alignItems:'center', marginBottom:5,
                }}
            >
                <FormControl
                    variant="standard" color="warning" 
                    sx={{ m: 0, width: '25ch', 
                        '& .MuiInput-underline:before': { 
                            borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                        }, 
                    }} 
                >
                    <InputLabel 
                        style={{color: darkMode ? `${WarningColor}` : 'black'}}
                        htmlFor="standard-adornment-password">Password</InputLabel>
                    <Input
                        id="standard-adornment-password"
                        inputProps={{
                            style:{color: darkMode ? 'white' : 'black',}
                        }}                        style={{
                            color: darkMode ? 'white' : 'black',
                            '& .MuiInput-underline:before': { 
                                borderBottomColor: darkMode ? `${WarningColor}` : 'black', 
                            },
                        }}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
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
                        onChange={(e)=> setPass((prev)=> (prev, e.target.value))}
                    />
                </FormControl>
            </Grid> 
            <Grid item md={2}
                style={{
                    display:'flex', justifyContent:'flex-start',
                    alignItems:'center', marginLeft:'2%'
                }}
            >
                <Button 
                    variant="outlined" color="warning" href="#outlined-buttons"
                    onClick={(e)=> loginCall({email : email, pass : pass})}
                >Log in</Button>
            </Grid>
        </Grid>
        </>
    );
};
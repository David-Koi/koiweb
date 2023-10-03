import React, {useState, useContext} from 'react';
import { GlobalContext } from '../../context/Globalcontext';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { Grid, Box, Button,TextField } from "@mui/material";
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';


export default function TransitionsModal({
    open, 
    reset,
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

    const inputStyle = {
    marginBottom:'20px',
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                // onClose={reset}
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
                                >User name</InputLabel>
                                <Input
                                    style={{color: darkMode ? 'white' : 'black'}}
                                    id="standard"
                                    type={'text'}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <IconButton color="warning">
                                                <AccountCircle />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    onChange={(e)=> console.log(e.target.value)}
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
                                >Mail</InputLabel>                        
                                <Input
                                    style={{color: darkMode ? 'white' : 'black'}}
                                    id="standard"
                                    type={'text'}
                                    endAdornment={
                                        <InputAdornment position="start">
                                            <IconButton color="warning">
                                                <MailIcon />
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                            {/* Password*/}
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
                                    htmlFor="standard-adornment-password"
                                >Password</InputLabel>
                                <Input                                    
                                    style={{color: darkMode ? 'white' : 'black'}}
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
                                />
                            </FormControl>
                            {/* Confirm password*/}
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
                                    htmlFor="standard-adornment-password"
                                >Confirm password</InputLabel>
                                <Input
                                    style={{color: darkMode ? 'white' : 'black'}}
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
                                />
                            </FormControl>
                            {/* Buttons*/}
                            <div 
                                style={{ width:'40%', display:'flex', justifyContent:'space-between'}}
                            >
                                <Button 
                                    variant="outlined" 
                                    color="warning" href="#outlined-buttons"
                                    onClick={()=> reset()}
                                >Cancel</Button>
                                <Button variant="outlined" 
                                    color="warning" href="#outlined-buttons"
                                >Send</Button>
                            </div>
                        </Grid>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
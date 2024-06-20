import {
    Box, Button, Checkbox, FormControl, FormControlLabel, createTheme, ThemeProvider,
    IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography
} from '@mui/material';
import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginPage() {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    }

    const Theme = createTheme({
        typography: {
          fontFamily: 'inherit',
        },
      });


    return (
        <ThemeProvider theme={Theme}>
        <Box sx={{ padding: '15px' }}>
            <Box sx={{ marginTop: '20px', marginBottom: '35px' }}>
                <Typography sx={{ fontWeight: 700, fontSize:'18px' }}>Sign in</Typography>
            </Box>
            <Box sx={{ marginBottom: '20px' }}>
                <Typography sx={{fontWeight:600, fontSize:'13px', marginBottom:'5px'}}>Email address:</Typography>
                <TextField sx={{fontSize:'15px'}} size="small" label="Email address" fullWidth />
            </Box>

            <Box>
                <div style={{display :"flex",justifyContent:'space-between', marginBottom:'5px'}}>
                <Typography sx={{fontWeight:600, fontSize:'13px'}}>Password:</Typography>
                
                <Typography sx={{fontSize:'13px', color:'#4C5FD7', cursor:'pointer'}}>Forgot password</Typography>
                </div>
                <FormControl size='small' fullWidth variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Enter password</InputLabel>
                    <OutlinedInput
                    sx={{fontSize:'15px'}}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                {showPassword ? <VisibilityOff /> : <Visibility />} 
                                </IconButton>
                            </InputAdornment>
                        }                                    
                        label="Enter password"
                    />
                </FormControl>
            </Box>
            
            <Box sx={{ marginTop: 2 }}>
                <FormControlLabel control={<Checkbox />} sx={{fontSize:'14px'}} label="Remember me"/>
            </Box>
            <Box sx={{ marginTop: 3 }}>
                <Button sx={{backgroundColor:'#4C5FD7', borderRadius:'8px', color:'white', textTransform:'none', fontSize:'15px'}} fullWidth>Sign in</Button>
            </Box>
            <Box sx={{ marginTop: 3, display: 'grid', justifyContent: 'center' }}>
                <Typography>New to Advance Entry?</Typography>
            </Box>
            <Box sx={{ display: 'grid', justifyContent: 'center'}}>
                <Link sx={{cursor:'pointer', color:'#4C5FD7', fontSize:'14px', fontWeight:"600"}} underline='none'>Contact us </Link>
            </Box>
            </Box >

            <Box sx={{ marginTop: 2, display:'flex', alignItems:'flex-end', flexDirection:"column" }}>
            <Box>
               <img src="./assets/Face-Id.png" alt="FaceId" style={{width:'100%'}} />
            </Box>
            <Box sx={{marginTop:'-70px', marginRight:'15px'}}>
               <img src="./assets/Advance Entry Vr.svg" alt="Advanced Entry" />
            </Box>
            </Box>

        </ThemeProvider>
    )
}

export default LoginPage;

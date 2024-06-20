import React from 'react';
import { Box, Typography, Button, Link, createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';


const Contact: React.FC = () => {

  const Theme = createTheme({
    typography: {
      fontFamily: 'inherit',
    },
  });


  return (
    <ThemeProvider theme={Theme}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        height="80vh"
        textAlign="center"
        padding={2}
      >
        <img
          src={'./assets/Lock Icon.png'}
          alt="Lock Icon"
          style={{ width:'74px', height:'100px',  marginBottom: "20px" }}
        />
        <Typography variant="h6" gutterBottom sx={{fontSize:'15px', fontWeight:700}}>
          Looks like you don't have access to this
        </Typography>
        <Typography variant="body1" gutterBottom sx={{fontSize:'14px'}}>
          You do not have access to this feature.
          <br />
          Please contact us to upgrade.
        </Typography>
        <Button sx={{ marginTop:"20px", width:'128px', height:'37px', backgroundColor:'#4C5FD7', color:'#4C5FD7', borderRadius:'8px', textTransform:'none', backgroundBlendMode:'color-burn' }}>
          Contact Us
        </Button>
        <Link href="" variant="body2" underline='none' sx={{ marginTop:"20px", fontSize:'14px', color:'#4C5FD7' }}>
          sales@advancedentry.com
        </Link>
      </Box>
      
      <img src="./assets/Advance Entry Hr.svg"
         alt="Advance Entry Hr"
         style={{
            padding:'30px',
            marginTop : '35px'
         }} />
         
    </ThemeProvider>
  );
};

export default Contact;

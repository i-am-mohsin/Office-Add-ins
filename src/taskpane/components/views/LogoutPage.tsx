// import React from 'react';
// import { Box, Typography, Switch, IconButton, Grid, Button, Link, Divider } from '@mui/material';
// import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import LogoutIcon from '@mui/icons-material/Logout';


// const LogoutPage: React.FC = () => {

  
//   return (

//     <Box sx={{ p: 2}}>
      
//       <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
//         <IconButton> 
//           <ArrowBackIosIcon />
//         </IconButton>
//         <Typography sx={{ ml: 1, fontSize:'16px' }}>
//           Options
//         </Typography>
//       </Box>

//       <Typography sx={{ mt: 5, fontSize:'16', fontWeight: 700 }}>
//         Settings
//       </Typography>

//       <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
//         <Typography variant="body1" sx={{fontSize:'15px'}}>Always add to meeting invites</Typography>
//         <Switch defaultChecked color="primary" />
//       </Box>

//       <Divider sx={{ marginTop:"30px" }} />

//       <Typography sx={{fontSize:'16px', fontWeight: 700, marginTop:'40px'}}>
//         Help
//       </Typography>

//       <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
//         <PhoneOutlinedIcon sx={{ mr: 1 }} />
//         <Typography sx={{fontSize:'15px', color:'#4C5FD7'}}>(888) 883-6879 | ext. 3</Typography>
//       </Box>

//       <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
//         <MailOutlineIcon sx={{ mr: 1 }} />
//         <Link href="mailto:cs@advancedentry.com" underline="none" color="inherit">
//           <Typography sx={{fontSize:'15px', color:'#4C5FD7'}}>cs@advancedentry.com</Typography>
//         </Link>
//       </Box>

//       <Divider sx={{ marginTop:"50px" }} />

//       <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
//         <Button sx={{width:'100%', marginTop:'30px', backgroundColor:'#E9F0FF', color:'#4C5FD7', borderRadius:'8px', textTransform:'none'}} startIcon={<LogoutIcon />}>
//           Log out
//         </Button>
//       </Box>

//       <Box sx={{display:'flex', justifyContent:'flex-start'}}>
//         <img src="./assets/Advance Entry Hr.svg" alt="Advance Entry" style={{marginTop:'290px', marginLeft:'15px'}} />
//       </Box>

//     </Box>
//   );
// };

// export default LogoutPage;


import React, { useState } from 'react';
import { Box, Typography, Switch, IconButton, Grid, Button, Link, Divider, colors } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import CheckIcon from '@mui/icons-material/Check';
import { styled } from '@mui/material/styles';

const CustomSwitch = styled(Switch)(({ checked }: { checked: boolean }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: 'grey',
    '&:hover': {
      backgroundColor: 'rgba(128,128,128,0.08)',
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: '#4C5FD7',
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: checked ? '#4C5FD7' : '#fff',
    '&::before': {
      content: checked ? '"\\2713"' : '""',
      color : 'white',
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
    },
  },
}));

const LogoutPage: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
        <IconButton>
          <ArrowBackIosIcon />
        </IconButton>
        <Typography sx={{ ml: 1, fontSize: '16px' }}>
          Options
        </Typography>
      </Box>

      <Typography sx={{ mt: 5, fontSize: '16px', fontWeight: 700 }}>
        Settings
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="space-between" sx={{ mt: 1 }}>
        <Typography variant="body1" sx={{ fontSize: '15px' }}>Always add to meeting invites</Typography>
        <CustomSwitch checked={checked} onChange={handleSwitchChange} />
      </Box>

      <Divider sx={{ marginTop: "30px" }} />

      <Typography sx={{ fontSize: '16px', fontWeight: 700, marginTop: '40px' }}>
        Help
      </Typography>

      <Box display="flex" alignItems="center" sx={{ mt: 2 }}>
        <PhoneOutlinedIcon sx={{ mr: 1 }} />
        <Typography sx={{ fontSize: '15px', color: '#4C5FD7' }}>(888) 883-6879 | ext. 3</Typography>
      </Box>

      <Box display="flex" alignItems="center" sx={{ mt: 1 }}>
        <MailOutlineIcon sx={{ mr: 1 }} />
        <Link href="mailto:cs@advancedentry.com" underline="none" color="inherit">
          <Typography sx={{ fontSize: '15px', color: '#4C5FD7' }}>cs@advancedentry.com</Typography>
        </Link>
      </Box>

      <Divider sx={{ marginTop: "50px" }} />

      <Box display="flex" justifyContent="center" sx={{ mt: 2 }}>
        <Button sx={{ width: '100%', marginTop: '30px', backgroundColor: '#E9F0FF', color: '#4C5FD7', borderRadius: '8px', textTransform: 'none' }} startIcon={<LogoutIcon />}>
          Log out
        </Button>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
        <img src="./assets/Advance Entry Hr.svg" alt="Advance Entry" style={{ marginTop: '270px', marginLeft: '15px' }} />
      </Box>
    </Box>
  );
};

export default LogoutPage;



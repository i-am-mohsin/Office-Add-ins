import React, { useState } from 'react';
import { TextField, Switch, Box, Typography, Button, Grid, FormGroup, createTheme, ThemeProvider, styled } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Theme = createTheme({
  typography: {
    fontFamily: 'inherit',
  },
});

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

const CustomTextField = styled(TextField)(({ theme }) => ({
  position: 'relative',
  marginTop: theme.spacing(-2.5),
  '& .MuiFormHelperText-root': {
    position: 'absolute',
    top: 0,
    right: 0,
    margin: 0,
    fontSize: '11px',
    Opacity: '45%'
  },
  '& .MuiInputBase-root': {
    marginTop: theme.spacing(3),
  },
}));

const MeetingForm: React.FC = () => {
  const [checked, setChecked] = useState(false);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <ThemeProvider theme={Theme}>
      <Box sx={{ p: 2 }}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2} sx={{ mb: 2 }}>
          <Grid item>
            <Typography sx={{ fontSize: '16px', fontWeight:700 }}>Enable pre-registration</Typography>
          </Grid>
          <Grid item>
          <CustomSwitch checked={checked} onChange={handleSwitchChange} />
          </Grid>
        </Grid>
        <FormGroup>
          <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: '700', marginBottom:'-12px', marginTop:'15px' }}>
            Meeting Host
          </Typography>
          <TextField
            placeholder=''
            variant="outlined"
            fullWidth
            size='small'
            margin="normal"
            sx={{borderRadius:'8px'}}
          />

          <Typography variant="body1" sx={{ fontSize: '16px', fontWeight: '700', marginTop:'15px' }}>
            Meeting Details
          </Typography>

          <Typography sx={{marginTop:'10px', marginBottom:'-12px', fontSize:'11px', opacity:'65%'}} variant="body1">
            Destination
          </Typography>
          <TextField
            placeholder='type destination...'
            variant="outlined"
            size='small'
            fullWidth
            margin="normal"
            sx={{borderRadius:'8px'}}
          />

          <Typography variant="body1" sx={{marginBottom:'-12px', marginTop:'10px',fontSize:'11px', opacity:'65%'}}>
            Arrival instructions
          </Typography>
          <TextField
            placeholder='type arrival instructions...'
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={{borderRadius:'8px'}}
          />

          <Typography variant="body1" sx={{marginTop:'10px', fontSize:'11px', opacity:'65%'}}>
            Meeting notes
          </Typography>
          <CustomTextField
            helperText='*Notes are for internal only'
            placeholder='type meeting notes...'
            variant="outlined"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            sx={{borderRadius:'8px'}}
          />
        </FormGroup>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop:'150px' }}>
          <Box>
            <img src="./assets/Advance Entry Hr.svg" alt="Advanced Entry" style={{marginLeft:'15px' ,cursor:'pointer'}} />
          </Box>
          <Button sx={{ backgroundColor: "white", border: '1px solid #e9e9e9', color: 'black', borderRadius: '8px', minWidth: '25px' }} >
            <MoreHorizIcon />
          </Button>
        </Box>

      </Box>
    </ThemeProvider>
  );
};

export default MeetingForm;


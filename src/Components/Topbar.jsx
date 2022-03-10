import React from 'react'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar } from '@mui/material';

import Box from '@mui/material/Box';
export default function Topbar(props) {
  
  return (
    <div>
       <AppBar position='fixed' sx={{
       display: 'flex',
       justifyContent:"end",
       flexDirection:"row",
       padding:'10px',
       
    }}>
     <Box sx={{

     }}>
      <IconButton sx={{ ml: 5 }} onClick={props.colorMode.toggleColorMode} color="inherit">
        {props.theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
     </Box>
   </AppBar>
    </div>
  )
}

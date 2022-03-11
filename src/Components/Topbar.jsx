import React from 'react'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { AppBar } from '@mui/material';

import Box from '@mui/material/Box';
export default function Topbar(props) {
  
  return (
    <div>
      <AppBar  sx={{
       display: 'flex',
       position:"fixed",
       top:"20px",
       left:{md:`${props.topbarWidth}px`,xs:'20px'},
       justifyContent:"end",
       flexDirection:"row",
       padding:'10px',
       bgcolor:"#533E85",
       opacity:"0.5",
       width:"auto",
       borderRadius:"10px",
       right:"20px",
       transition: "all 0.2s ease-in",
       
    }}>
    <Box sx={{marginTop:"5px",position:"absolute",left:'20px','&:hover': {
    backgroundColor: '#ffffff',
    boxShadow: 'none',
    color:'blueviolet',
    borderRadius:'25%',
  },}}>
        <MenuOutlinedIcon sx={{ marginTop:"5px", display:{md:"flex",xs:"none"} }} onClick={props.sideMode} />
        <MenuOutlinedIcon sx={{ marginTop:"5px", display:{md:"none",xs:"flex"} }} onClick={props.sideModeXs} />
      </Box>
 
     <Box sx={{

     }}>
      <IconButton sx={{ ml: 5 }} onClick={props.colorMode} color="inherit">
        {props.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
     </Box>
   </AppBar>
    </div>
  )
}

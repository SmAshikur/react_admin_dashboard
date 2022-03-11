import React from 'react'
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { Paper, Tooltip,Menu, MenuItem,Avatar,Divider } from '@mui/material';
import Zoom from '@mui/material/Zoom';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Box from '@mui/material/Box';
import ListItemIcon from '@mui/material/ListItemIcon';
 
 
export default function Topbar(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <Paper  sx={{
       display: 'flex',
       position:"fixed",
       top:"20px",
       left:{md:`${props.topbarWidth}px`,xs:'20px'},
       justifyContent:"end",
       flexDirection:"row",
       padding:'10px',
       bgcolor:"#533E85",
       
       width:"auto",
       borderRadius:"10px",
       right:"20px",
       transition: "all 0.2s ease-in",
       
       
    }}>
      <Tooltip title="Side bar"  TransitionComponent={Zoom}>
      <Box sx={{marginTop:"5px",position:"absolute",left:'20px','&:hover': {
      backgroundColor: '#ffffff',
      boxShadow: 'none',
      color:'blueviolet',
      borderRadius:'25%',
      },
    }}> 
    
        <MenuOutlinedIcon sx={{ marginTop:"5px", display:{md:"flex",xs:"none"} }} onClick={props.sideMode} />
        <MenuOutlinedIcon sx={{ marginTop:"5px", display:{md:"none",xs:"flex"} }} onClick={props.sideModeXs} />
   
      </Box>
      </Tooltip>
     <Box sx={{

     }}>
       <Tooltip title="Screen mode"  TransitionComponent={Zoom}>
      <IconButton sx={{ ml: 5 }} onClick={props.colorMode} color="inherit">
        {props.theme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </Tooltip>
     
     </Box>
     <Tooltip title="Profile"  TransitionComponent={Zoom}>
     <Box sx={{
        height:"40px",
        width:"40px",
        borderRadius:"50%",
        overflow:"hidden",
        margin:'0px 10px',
      }}>
      <img src="https://scontent.fdac5-1.fna.fbcdn.net/v/t1.6435-9/46440179_767575996924199_5079916841866887168_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeEyJQXh3LvcqxcUvja_CqxoQnjVbko_8ydCeNVuSj_zJ2SXWKaX9aW2B92o_vklh9sHdy2BoOo5CVAT0J4xcyTh&_nc_ohc=gDxhMPSGTXcAX94lAjW&_nc_ht=scontent.fdac5-1.fna&oh=00_AT8RNbgk7GGpS5SzM_rtgtvaNZ6JzPYkAMADp5nreaB0qQ&oe=62524221" alt="" style={{height:"100%",width:"100%"}}/>
      </Box>
      
      </Tooltip>
   </Paper>
    </div>
  )
}

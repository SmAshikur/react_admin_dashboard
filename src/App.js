import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { AppBar,Paper, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Sidebar from './Components/Sidebar';
import { borderRadius } from '@mui/system';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const [sidebarWidth,setSidebarWidth]= React.useState(230);
  const [topbarWidth,setTopbarWidth]= React.useState(270);
  const [mainbarWidth,setMainbarWidth]= React.useState(280);
  
 
  const sideMode = React.useMemo(
    () => ({
       changeSidebar : () => {
        setSidebarWidth((prevMode) => (prevMode === 230 ? 60 : 230));
        setTopbarWidth((prevMode) => (prevMode === 270 ? 90 : 270));
        setMainbarWidth((prevMode) => (prevMode === 280 ? 100 : 280));
      }
    }),
    [],
  );
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div  >
   
    <AppBar  sx={{
       display: 'flex',
       position:"fixed",
       top:"20px",
       left:{md:`${topbarWidth}px`,xs:'20px'},
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
        <MenuOutlinedIcon sx={{ marginTop:"5px"  }} onClick={sideMode.changeSidebar} />
      </Box>
 
     <Box sx={{

     }}>
      <IconButton sx={{ ml: 5 }} onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
     </Box>
   </AppBar>
   
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height:'100vh',
        position:'fixed',
        top:'0',
        bgcolor: 'background.default',
        color: 'text.primary',
        borderRadius: 1,
        p: 0,
      }}
    >
      <Paper  sx={{
      //  display: {md:'flex',xs:'none'},
       position:"fixed",
       top:"0",
       left:"0",
       bottom:'0',
       justifyContent:"end",
       flexDirection:"row",
       padding:{md:"10px",xs:""},
       bgcolor:"#533E85",
       opacity:"0.7",
       width:{md:`${sidebarWidth}px`, xs:"0px"},
       transition: "all 0.2s ease-in",
       boxSizing: "border-box",
       overflow:'hidden'
        
       
    }}>
      <Box sx={{width:'100%', bgcolor:"#f4f4fd",overflow:"hidden"}}>
      
      </Box>
       
      
      </Paper>
     <Paper  sx={{
       display: 'flex',
       position:"fixed",
       top:"100px",
       left:{md:`${mainbarWidth}px`,xs:'30px'},
       justifyContent:"end",
       flexDirection:"row",
       padding:'10px',
       bgcolor:"#533E85",
       opacity:"0.6",
       width:"auto",
       height:"auto",
       borderRadius:"10px",
       right:"30px",
       bottom:"20px",
       transition: "all 0.2s ease-in",      
    }}></Paper>
      
     
     
      
    </Box>
     
   </div>
  );
}


 
export default function ToggleColorMode() {
  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <MyApp />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
import * as React from 'react';
 
import Box from '@mui/material/Box';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
 

 
import Sidebar from './Components/Sidebar';
 
import Topbar from './Components/Topbar';
import Main from './Components/Main/Main';
//import { Button } from '@mui/material';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function MyApp() {
  const [sidebarWidth,setSidebarWidth]= React.useState(250);
  const [topbarWidth,setTopbarWidth]= React.useState(270);
  const [mainbarWidth,setMainbarWidth]= React.useState(280);
  const [sidebarWidthXs,setSidebarWidthXs]= React.useState(0);
  
  const sideMode = React.useMemo(
    () => ({
       changeSidebar : () => {
        setSidebarWidth((prevMode) => (prevMode === 250 ? 70 : 250));
        setTopbarWidth((prevMode) => (prevMode === 270 ? 90 : 270));
        setMainbarWidth((prevMode) => (prevMode === 280 ? 100 : 280));
      }
    }),
    [],
  );
  const sideModeXs = React.useMemo(
    () => ({
      changeSidebarXs : () => {
        setSidebarWidthXs((prevMode) => (prevMode === 0 ? 250 : 0));
      },
      
    }),
    [],
  );
  const sideModeXz = React.useMemo(
    ()=>({
      hideSidebar:()=> {
        if(sidebarWidthXs===250){
          setSidebarWidthXs(0)
          
        }
      }
    }),[sidebarWidthXs]
  )

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <div  >
   
    
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height:'100vh',
        position:'fixed',
        top:'0',
        bgcolor: 'background.default',
        color: 'text.primary',
        p: 0,
       
       
         
      }}
      
    >
      <Sidebar sidebarWidth={sidebarWidth} sidebarWidthXs={sidebarWidthXs}/>
      <Box onClick={()=>{sideModeXz.hideSidebar()}}>
      <Topbar sideMode={sideMode.changeSidebar}  sideModeXs={sideModeXs.changeSidebarXs} colorMode={colorMode.toggleColorMode} 
      topbarWidth={topbarWidth} theme={theme.palette.mode}/>
   
     
     <Main mainbarWidth={mainbarWidth} />
     </Box>  
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
import { Paper,Box } from '@mui/material'
import React from 'react'

export default function Sidebar(props) {
  return (
    <>
      <Paper  sx={{
      //  display: {md:'flex',xs:'none'},
       position:"fixed",
       top:"0",
       left:"0",
       bottom:'0',
       justifyContent:"end",
       height:"auto",
       flexDirection:"row",
       padding:{md:"10px",xs:""},
       bgcolor:{md:"#533E85",xs:"purple"},
       opacity:{md:"0.7",xs:"1"},
       zIndex:{md:"0 ",xs:"2 "},
       width:{md:`${props.sidebarWidth}px`, xs:`${props.sidebarWidthXs}px`},
       transition: "all 0.2s ease-in",
       boxSizing: "border-box",
       overflow:'hidden',
       borderTopRightRadius:{md:"10%",xs:"100px"}
    }}>
      <Box sx={{width:'100%', bgcolor:"#f4f4fd",overflow:"hidden"}}>
      
      </Box>
       
      
      </Paper>
    </>
  )
}

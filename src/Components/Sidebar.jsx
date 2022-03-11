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
       flexDirection:"row",
       padding:{md:"10px",xs:""},
       bgcolor:"#533E85",
       opacity:"0.7",
       width:{md:`${props.sidebarWidth}px`, xs:`${props.sidebarWidthXs}px`},
       transition: "all 0.2s ease-in",
       boxSizing: "border-box",
       overflow:'hidden'
        
       
    }}>
      <Box sx={{width:'100%', bgcolor:"#f4f4fd",overflow:"hidden"}}>
      
      </Box>
       
      
      </Paper>
    </>
  )
}

import React from 'react'
import { Button, Paper, } from '@mui/material';
export default function Main(props) {
  return (
    <div>
       <Paper  sx={{
       display: 'flex',
       position:"fixed",
       top:"100px",
       left:{md:`${props.mainbarWidth}px`,xs:'30px'},
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
    }}>
        
        
        </Paper>
    </div>
  )
}

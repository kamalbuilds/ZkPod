import React from 'react'
import {Box} from "@mui/material"

type Props ={
    styleProp?:{},
    children:JSX.Element
}

export const GlassCardLayout = ({styleProp,children}:Props) => {
  return (
    <Box className='glassmorphism-card' sx={styleProp}>
        {children}
    </Box>
  )
}

import React from 'react'
import {Box,Typography} from "@mui/material"
const Navbar = () => {
  return (
    <Box width="100%">
        <Typography 
            variant='h2'
            fontWeight="bold"
        >
            <span style={{
                color:"#16c2d5"
            }}>ZK</span>Med
        </Typography>
    </Box>
  )
}

export default Navbar
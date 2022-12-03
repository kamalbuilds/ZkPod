import React from 'react'
import {Box,Typography} from "@mui/material";
import doc from "../assets/doc.jpg";
import Image from "next/image"

const Student = () => {
  return (
    <Box>
       <Box mt={5} mb={8} display="flex" justifyContent="space-around" alignItems="center" flexWrap="wrap">
    <Image
      src={doc}
      alt="image"
      style={{
        width:"900px",
        borderRadius:"50px"
      }}
    />
    <Typography variant='h2' fontWeight='bold' textAlign="center" sx={{
      color:"#16c2d5",
      marginLeft:4
    }}>
      Welcome 👋 See your degree
    </Typography>
    </Box>   
    {/* Dgree NFT */}
    </Box>
  )
}

export default Student
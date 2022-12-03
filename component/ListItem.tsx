import React,{useState} from 'react'
import { GlassCardLayout } from './GlassCardLayout'
import {Box,Typography,Button} from "@mui/material"
import ButtonUI from "./Button"
import Image from 'next/image'
import DetailsModal from './Modal'
const ListItem = (props:any) => {
  const {studentId,
    accountAddress,
    passoutdate,
    name,
    image,
    age,
    phnumber
    }=props.data

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      console.log("Hello")
      setOpen(true)
    };
    const handleClose = () => setOpen(false);


  return (
    <>
      <DetailsModal
        data={props.data}
        open={open}
        handleClose={handleClose}

      />
    <GlassCardLayout styleProp={{mb:2,p:2}}>
      <Box display="flex" justifyContent="space-between">
        <Box display='flex' alignItems="center" gap={3}>
            <Image 
            src={image || "https://picsum.photos/200"}
            alt="logo"
            style={{
              width: "50px",
              borderRadius: "50%",
            }}/>
            <Typography variant='h6' fontSize={15} fontWeight="bold">
                {name}
            </Typography>
        </Box>
        <ButtonUI onClickHandler={handleOpen} name="Issue Degree"/>
      </Box>
    </GlassCardLayout>
    </>
  )
}

export default ListItem
import React, { useState } from 'react'
import {Modal,Box,Typography,TextField} from "@mui/material"
import Image from 'next/image';
import ButtonUI from './Button';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "(100vh - 50%)",
  bgcolor: 'background.paper',
  border: '2px solid #89dee2',
  boxShadow: 24,
  borderRadius:5,
  p: 4,
};

const DetailsModal = (props:any) => {
  const {
    data,
    open,
    handleClose
    }=props;
    const {
      studentId,
      accountAddress,
      passoutdate,
      name,
      image,
      age,
      phnumber
    }=data;

    const [license,setLicense]=useState("");
    const createDegree=()=>{
      console.log(data,license);
    }
    const inputHandler=(e:React.FormEvent<HTMLInputElement>)=>{
      setLicense(e.target.value);
    }


  return (
    <>
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Image
          src={image}
          alt="doctor-image"
          style={{
            width:"300px",
            textAlign:"center",
            borderRadius:"20px",
          }}
        />
        <Box display="felx">
          <Typography variant='h6' fontWeight="bold">
            Name
          </Typography>
          <Typography variant='h6'>
            {name}
          </Typography>
        </Box>
        <Box display="felx">
          <Typography variant='h6' fontWeight="bold">
            Student Id
          </Typography>
          <Typography variant='h6'>
            {studentId}
          </Typography>
        </Box>
        <Box display="felx">
          <Typography variant='h6' fontWeight="bold">
          Account Address
          </Typography>
          <Typography variant='h6'>
            {accountAddress}
          </Typography>
        </Box>
        <Box display="felx">
          <Typography variant='h6' fontWeight="bold">
          Age
          </Typography>
          <Typography variant='h6'>
            {age}
          </Typography>
        </Box>

        <Box display="felx">
          <Typography variant='h6' fontWeight="bold">
           Passout date
          </Typography>
          <Typography variant='h6'>
            {passoutdate}
          </Typography>
        </Box>
        <Box display="felx">
          <Typography variant='h6' fontWeight="bold">
            Phone number
          </Typography>
          <Typography variant='h6'>
            {phnumber}
          </Typography>
        </Box>
        <Box display="felx" mb={2}>
          <Typography variant='h6' fontWeight="bold">
            Provide License Number
          </Typography>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange={inputHandler}/>
        </Box>
        
        <ButtonUI onClickHandler={createDegree} name="Genrate Degree" />
        
      </Box>
    </Modal>
    </>
  )
}

export default DetailsModal
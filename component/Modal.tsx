import React, { useState } from 'react'
import {Modal,Box,Typography,TextField, Button} from "@mui/material"
import { QRCode } from 'react-qr-svg';

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
    open,
    handleClose
    }=props;


  const minter=()=>{
    // Minting code will be here
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
      <QRCode
        level="Q"
        style={{ width: 256 }}
        value={JSON.stringify({h:"qrProofRequestJson"})}
      />
      <Button variant="outlined" onClick={minter}>Mint Degree</Button>
      </Box>
    </Modal>
    </>
  )
}

export default DetailsModal
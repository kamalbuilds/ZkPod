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

    // ...

    // Config
    // ========================================================
    // update with your contract address
    const DEPLOYED_CONTRACT_ADDRESS = "0xE8274D285F08D52fd1DEC6434b9360eB20d1467E";

    /**
     * 
     */
    const qrProofRequestJson = proofRequest;
    qrProofRequestJson.body.transaction_data.contract_address = DEPLOYED_CONTRACT_ADDRESS;
    qrProofRequestJson.body.scope[0].rules.query.req = {
    "Date": {
        // NOTE: this value needs to match the erc20ZkpRequest.ts L34 or erc721ZkpRequest.ts L34
        "$gt": 10
    }
    };
    // NOTE1: if you change this you need to resubmit the erc10|erc721ZKPRequest
    // NOTE2: type is case-sensitive
    // You can generate new schemas via https://platform-test.polygonid.com
    qrProofRequestJson.body.scope[0].rules.query.schema = {
    "url": "https://s3.eu-west-1.amazonaws.com/polygonid-schemas/96c80e89-3c04-4762-8f4a-c39373571506.json-ld",
    "type": "MyCustomSchema"
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
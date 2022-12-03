import React from 'react'
import {Button} from "@mui/material"

const ButtonUI = (props:any) => {
  console.log(props)
  return (
    <Button onClick={props.onClickHandler}
        sx={{
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"#89dee2 !important",
            color:"#2e4450",
            fontWeight:"bold"
        }}
    >
        {props.name}
    </Button>
  )
}

export default ButtonUI
import React,{useContext} from 'react'
import {Box} from "@mui/material"
import Image from "next/image"
import uni from "../assets/uni.webp"
import ButtonUI from '../compoponent/Button'
import {AuthContext} from '../context/AuthContext'
import Router from 'next/router'
const Login = () => {
    const atx=useContext(AuthContext)

  const login=()=>{
    atx.login();
    if(!atx.err){
        console.log(atx.address);
        if(!atx.userDetails){
            Router.push("/StudentRegistration")
        }else{
            Router.push("/Student")
        }
    }else{
        console.log("Something went wrong");
    }
  }
  
  return (
    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" height="100%" mt={30}>
       <Image
        src={uni}
        alt="logo"
        style={{
            marginBottom:"20px",
            borderRadius:"20px",
            width:"500px"
        }}
       /> 
       <ButtonUI onClickHandler={login} name="Login"/>
    </Box>
  )
}

export default Login
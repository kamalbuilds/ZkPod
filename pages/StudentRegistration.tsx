import React, { useState,useContext } from 'react'
import { Box, TextField,Typography } from "@mui/material"
import Image from 'next/image'
import med from "../assets/med4.png"
import ButtonUI from '../component/Button'
import { AuthContext } from '../context/AuthContext'
import { addressShortner } from '../utils/addressShortner'

const StudentRegistration = () => {
    const [loading,setLoading]=useState(false);
    const [value, setValue] = useState({
        name: "",
        studentId:"",
        age: "",
        phnnumber: "",
        passoutdate: "",
    });
    const inputs = [{
        title: "Name",
        name: "name",
        type: "text"
    },
    {
       title:"StudentID",
       name:"studentId",
       type:"text" 

    },

    ]

    const atx=useContext(AuthContext);
    console.log(atx.address)


    const inputHandler = (e: any) => {
        setValue((p) => ({ ...p, [e.target.name]: e.target.value }));
        console.log(value);
    };

    const register = () => {
        const data = { ...value }
        setLoading(true);
        console.log(data);
        setLoading(false);
    }

    return (
    <>
        <Box >
        <Box mt={5} mb={8} display="flex" justifyContent="space-around" alignItems="center">
    <Image
      src={med}
      alt="image"
      style={{
        width:"900px"
      }}
    />
    <Typography variant='h2' fontWeight='bold' textAlign="center" sx={{
      color:"#16c2d5",
      marginLeft:4,
      width:"600px"
    }}>
      Register !!! To Claim Your Degree 📃
    </Typography>
    
    </Box> 
    </Box>
        <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
            <Typography variant='h2' fontWeight="bold">Wellcome {addressShortner(atx.address)} 👋</Typography>
            {inputs.map((input, i) => (
                <TextField sx={{
                    mb:2,
                    width:"500px"
                }} id={input.name} label={input.title} name={input.name} variant="standard" type={input.type} 
                onChange={inputHandler}
                />
            ))}
            {!loading && <ButtonUI onClickHandler={register} name="Ready to Go ➡️" />}
            {loading && <ButtonUI onClickHandler={register} name="Please Wait... ⌛" />}
        </Box>
        </>
    )
}

export default StudentRegistration
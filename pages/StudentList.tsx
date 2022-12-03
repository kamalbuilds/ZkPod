import React, { useState } from 'react'
import ListItem from '../component/ListItem'
import {Box,Typography} from "@mui/material"
import Image, { StaticImageData } from 'next/image'
import med from "../assets/med4.png"
import doc from "../assets/doc.jpg"
type StudentData={
  studentId:string,
  accountAddress:number,
  passoutdate:string,
  name:string,
  image:string | Object
  age:number,
  phnumber:string
}

const dummyData:StudentData[]=[
    {
        studentId:"20BCE7045",
        accountAddress:0x0121312312,
        passoutdate:"828128",
        name:"Subhradwip Kulavi",
        phnumber:"91213131231",
        image:doc,
        age:19
    },
    {
        studentId:"20BCE7046",
        accountAddress:0x0121312312,
        passoutdate:"828128",
        name:"Subhradwip Kulavi",
        phnumber:"91213131231",
        image:doc,
        age:19
    },
    {
        studentId:"20BCE7047",
        accountAddress:0x0121312312,
        passoutdate:"828128",
        name:"Subhradwip Kulavi",
        phnumber:"91213131231",
        image:doc,
        age:19
    }
]

const StudentList = () => {
  const [students,setStudents]=useState(dummyData);
  console.log(typeof doc)
  // data gfetch of the students
  return (
    <Box pt={5}>
    <Box display="flex" justifyContent="space-between" alignItems="center" mb={8}>
    <Image
      src={med}
      alt="image"
      style={{
        width:"900px"
      }}
    />
    <Typography variant='h2' fontWeight='bold' textAlign="center" sx={{
      color:"#16c2d5",
      marginLeft:4
    }}>
      Give degree as NFT to 2022 Batch
    </Typography>
    
    </Box>
    {students.map((student:StudentData)=>{
      return (
      <ListItem data={student} Key={student.studentId}/>
      )
    }
  )}
  </Box>
  )
}

export default StudentList
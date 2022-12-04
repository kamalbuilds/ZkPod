import React, { useState, useContext, useEffect } from 'react'
import { Box, TextField, Typography } from "@mui/material"
import Image from 'next/image'
import med from "../assets/med4.png"
import ButtonUI from '../component/Button'
import { AuthContext } from '../context/AuthContext'
import jwt_decode from "jwt-decode"
import QrModal from '../component/Modal'


const StudentRegistration = () => {
    const atx = useContext(AuthContext)
    console.log(atx)
    const [loading, setLoading] = useState(false);
    const [value, setValue] = useState({
        name: "",
        studentId: "",
        walletAddress: atx.address,
    });
    const inputs = [{
        title: "Name",
        name: "name",
        type: "text"
    },
    {
        title: "StudentID",
        name: "studentId",
        type: "text"

    },
    ]


    const [token, setToken] = useState(null)
    const [schema, setSchema] = useState(null)
    const [schemaLink, setClaimLink] = useState(null)
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true)
    };
    const handleClose = () => setOpen(false);

    useEffect(() => {
        fetch('https://api-staging.polygonid.com/v1/orgs/sign-in', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'application/json',
            },
            body: JSON.stringify({
                email: "youngsj500@gmail.com",
                password: "PikachuPikachu1!",
            }),
        })
            .then((response) => response.json())
            .then(({ token }) => {
                setToken(token)
                const {
                    account: { organization: issuerId },
                } = jwt_decode(token)
                console.log(issuerId)
                const schema_id = "e5c6d9aa8db73c187113290407082ebd"
                const tempSchemaLink = `https://api-staging.polygonid.com/v1/issuers/${issuerId}/schemas/${schema_id}`
                setClaimLink(`${tempSchemaLink}/offers`)
                return { token, tempSchemaLink }
            })
            .then(({ token, tempSchemaLink }) => {
                fetch(tempSchemaLink, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept-Encoding': 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((data) => setSchema(data))
            })
    }, [])
    console.log(setSchema)
    const handleResults = () => {
        console.log(schemaLink)
        fetch(schemaLink, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                attributeKey: "yes",
                attributeValue: parseInt(value.studentId)
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response)
                window.open(
                    `https://platform-test.polygonid.com/claim-link/52ce53d9-6abd-4d2b-981c-18890e2ec6b3`,
                    '_newtab'
                )
            })
    }

    const inputHandler = (e: any) => {
        setValue((p) => ({ ...p, [e.target.name]: e.target.value }));
        console.log(value);
    };

    const register = () => {
        setLoading(true);
        handleResults();
        setLoading(false);
        setOpen(true);
    }

    return (
        <>
            <Box>
                {open && <QrModal open={open} handleClose={handleClose} />}
                <Box mt={5} mb={8} display="flex" justifyContent="space-around" alignItems="center">
                    <Image
                        src={med}
                        alt="image"
                        style={{
                            width: "900px"
                        }}
                    />
                    <Typography variant='h2' fontWeight='bold' textAlign="center" sx={{
                        color: "#16c2d5",
                        marginLeft: 2,
                        marginRight: 4,
                        width: "400px"
                    }}>
                        Login to claim your degree as an SBT, and generate a proof for your identity on-chain.
                    </Typography>

                </Box>
            </Box>
            <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
                <Typography variant='h2' fontWeight="bold">Welcome 👋</Typography>
                {inputs.map((input, i) => (
                    <TextField sx={{
                        mb: 2,
                        width: "500px"
                    }} id={input.name} label={input.title} name={input.name} variant="standard" type={input.type}
                        onChange={inputHandler}
                    />
                ))}
                <TextField id="address" label="Address" name="address" defaultValue={atx.address} variant="standard" disabled sx={{
                    marginBottom: "40px",
                    width: "500px"
                }} />
                {!loading && <ButtonUI onClickHandler={register} name="Ready to Go ➡️" />}
                {loading && <ButtonUI onClickHandler={register} name="Please Wait... ⌛" />}
            </Box>
        </>
    )
}

export default StudentRegistration
import { TextField,Button, Box,Alert,FormControlLabel,Checkbox  } from "@mui/material"
import {  useNavigate } from "react-router-dom"

import { useState } from "react"

const Registration = () => {

    const [error,setError] = useState({
        staus:false,
        msg:"",
        type:""
      })
     
      const navigate = useNavigate();
 
    
      const handleSubmit = (e)=>{
        e.preventDefault();
        const  data = new FormData(e.currentTarget);
        const actualData={
          name: data.get('name'),
          email: data.get('email'),
          password: data.get('password'),
          password_confirm: data.get('password_confirm'),
          tc : data.get('tc'),

        }

        if( actualData.name && actualData.email && actualData.password && actualData.tc !== null){
         if(actualData.password === actualData.password_confirm){
            console.log(actualData);
            document.getElementById('registration-form').reset();
            setError({staus:true, msg:"Registration Successfull", type:'success'})
            navigate('/dashboard')
         } else{
            setError({staus:true, msg:"Confirm the Password again!", type:'error'})
         }
        }
        else{
          setError({staus:true, msg:"All fields are required", type:'error'})
        }
      }


  return (
    <>
        <Box component='form' noValidate sx={{mt:1}} id="registration-form" onSubmit={handleSubmit}>
      <TextField margin='normal'  required fullWidth id='name' name='name' label='Name'  />
      <TextField margin='normal'  required fullWidth id='email' name='email' label='Email Address'  />
      <TextField  margin='normal' required fullWidth id='password' name='password' label='Password' type="password" />
      <TextField  margin='normal' required fullWidth id='password_confirm' name='password_confirm' label='Confirm Password' type="password" />
       <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to terms and conditions."/>
       <Box textAlign={"center"}>
        <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Register</Button>
       </Box>
       
       {error.staus ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
       
    </Box>
      
    </>
  )
}

export default Registration

import { TextField,Box,Alert,Button } from "@mui/material"
import { useState } from "react"


const ChangePassword = () => {

    

    const [error,setError] = useState({
        staus:false,
        msg:"",
        type:""
      })
    

    
      const handleSubmit = (e)=>{
        e.preventDefault();
        const  data = new FormData(e.currentTarget);
        const actualData={
            password: data.get('password'),
            password_confirm: data.get('password_confirm'),
   
        }
        if(actualData.password  && actualData.password_confirm){
            if(actualData.password === actualData.password_confirm){
                console.log(actualData);
                document.getElementById('password-change-form').reset();
                setError({staus:true, msg:"Password Changed Successfully.", type:'success'})
             } else{
                setError({staus:true, msg:"Confirm the Password again!", type:'error'})
             }
        }
        else{
          setError({staus:true, msg:"All fields are required!", type:'error'})
        }
      }

  return (
    <>
      
      <Box sx={{display:'flex' , flexDirection:'column', flexWrap:'wrap', maxWidth:600, mx:4}}>
        <h1>Change Password</h1>
       
       <Box component='form' onSubmit={handleSubmit} noValidate sx={{mt:1}} id="password-change-form">
       <TextField  margin='normal' required fullWidth id='password' name='password' label=' New Password' type="password" autoComplete="current-password"/>

       <TextField  margin='normal' required fullWidth id='password_confirm' name='password_confirm' label='Confirm Password' type="password"  autoComplete="current-password"/>

       <Box textAlign={"center"}>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Update</Button>
           </Box>
           
           {error.staus ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
           


       </Box>
      </Box>
    </>
  )
}

export default ChangePassword

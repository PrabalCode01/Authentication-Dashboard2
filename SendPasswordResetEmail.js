import { Grid,TextField,Button,Box,Alert } from "@mui/material"
import { useState } from "react"

const SendPasswordResetEmail = () => {
    const [error,setError] = useState({
        staus:false,
        msg:"",
        type:""
      })
    

    
      const handleSubmit = (e)=>{
        e.preventDefault();
        const  data = new FormData(e.currentTarget);
        const actualData={
          email: data.get('email'),
   
        }
        if(actualData.email ){
          console.log(actualData);
          document.getElementById('password-reset-form').reset();
          setError({staus:true, msg:"Email sent for password reset. Check your Email!", type:'success'})
          
        }
        else{
          setError({staus:true, msg:"Please provide Email", type:'error'})
        }
      }
      return (
        <>
     <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
        <h1>Reset Password</h1>
        <Box component='form' noValidate sx={{mt:1}} id="password-reset-form" onSubmit={handleSubmit}>
          <TextField margin='normal'  required fullWidth id='email' name='email' label='Email Address'  />
          
           <Box textAlign={"center"}>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Send</Button>
           </Box>
           
           {error.staus ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
           
        </Box>
        </Grid>
     </Grid>
    </>
  )
}

export default SendPasswordResetEmail

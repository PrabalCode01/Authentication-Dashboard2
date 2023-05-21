import { Grid,TextField,Box,Alert,Button } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const ResetPasswordForm = () => {

    const navigate = useNavigate();
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
                document.getElementById('password-reset-email-form').reset();
                setError({staus:true, msg:"Password Reset Successfully. Redirecting to Login Page...", type:'success'})

                setTimeout(()=>{
                      navigate('/login')
                },3000)
             
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
     <Grid container justifyContent="center">
        <Grid item sm={6} xs={12}>
            <h1>Reset Password</h1>
        <Box component='form' noValidate sx={{mt:1}} id="password-reset-email-form" onSubmit={handleSubmit}>
        <TextField  margin='normal' required fullWidth id='password' name='password' label=' New Password' type="password" />
        <TextField  margin='normal' required fullWidth id='password_confirm' name='password_confirm' label='Confirm Password' type="password" />

           <Box textAlign={"center"}>
            <Button type="submit" variant="contained" sx={{mt:3, mb:2, px:5}}>Save</Button>
           </Box>
           
           {error.staus ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
           
        </Box>
        </Grid>
     </Grid>
    </>
  )
}

export default ResetPasswordForm

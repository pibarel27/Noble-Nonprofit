import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
const SendPasswordResetEmail = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const goToReset = () => {
    navigate("/ResetPassword");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    if (actualData.email) {
      console.log(actualData);
      document.getElementById('password-reset-email-form').reset()
      setError({ status: true, msg: " Check Your Email !!", type: 'success' })
    } else {
      setError({ status: true, msg: "Please Provide Valid Email", type: 'error' })
    }
  }
  return <>
    <Grid container justifyContent='center'>
      <Grid item sm={6} xs={12}>
        <Box component='form' noValidate sx={{ mt:10 }} id='password-reset-email-form' onSubmit={handleSubmit}>
         <h1>Forgot your password</h1>
          <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}onClick={goToReset}>Next</Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
      </Grid>
    </Grid>
  </>;
};

export default SendPasswordResetEmail;

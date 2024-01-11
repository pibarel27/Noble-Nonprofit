import { Grid, TextField, Button, Box, Alert } from "@mui/material";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ResetPassword = () => {
  const navigate = useNavigate()
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
    }
    if (actualData.password && actualData.password_confirmation) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('password-reset-form').reset()
        setError({ status: true, msg: "Password Reset Successfully. Redirecting to Login Page...", type: 'success' })
        setTimeout(() => {
          navigate("/loginReg")
        }, 3000)
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
  <div className="min-h-screen mt-10 bg-gray-100 flex flex-col justify-self-auto items-center">
    <div className="max-w-md w-full p-5 bg-white shadow-lg rounded-lg">
    <h3 className="text-3xl font-semibold mb-4">Reset password</h3>
    <p>Your password must be at least six characters and should include a combination of numbers, letters and special characters (!$@%).</p>
    <Grid container  sx={{ height: '30vh' }} justifyContent='center'>
      <Grid item sm={15} xs={20}>
        <Box component='form' noValidate id='password-reset-form' onSubmit={handleSubmit}>
          <TextField margin='normal' required fullWidth id='password' name='password' label='New Password' type='password' />
          <TextField margin='normal' required fullWidth id='password_confirmation' name='password_confirmation' label='Confirm New Password' type='password' />
          <Box textAlign='center'>
            <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Save</Button>
          </Box>
          {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
        </Box>
      </Grid>
    </Grid>
    </div>
    </div>
  </>;
};

export default ResetPassword;

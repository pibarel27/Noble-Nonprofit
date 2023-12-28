import { TextField, FormControlLabel, Checkbox, Grid, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import pic1 from "../../images/pic1.png"
const Registration = () => {
  const [error, setError] = useState({
    status: false,
    msg: "",
    type: ""
  })
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
      tc: data.get('tc'),
    }
    if (actualData.name && actualData.email && actualData.password && actualData.password_confirmation && actualData.tc !== null) {
      if (actualData.password === actualData.password_confirmation) {
        console.log(actualData);
        document.getElementById('registration-form').reset()
        setError({ status: true, msg: "Registration Successful", type: 'success' })
        navigate('/dashboard')
      } else {
        setError({ status: true, msg: "Password and Confirm Password Doesn't Match", type: 'error' })
      }
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }
  return <>
  
  <Grid container sx={{ height: '120vh' }}>
  <Grid item lg={7} sm={8} sx={{
        backgroundImage: `url(${pic1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'block' }
      }}>
      </Grid>
      <Grid item lg={5} sm={7} xs={12}>
    <Box component='form' noValidate sx={{ mt:5, mb:1, px: 2}} id='registration-form' onSubmit={handleSubmit}>
      <TextField className='w-full' margin='normal'  required  id='name' name='name' label='Name' /> <br></br>
      <TextField className='w-full' margin='normal' required  id='email' name='email' label='Email Address' /> <br></br>
      <TextField className='w-full' margin='normal' required  id='password' name='password' label='Password' type='password' /> <br></br>
      <TextField className='w-full' margin='normal' required id='password_confirmation' name='password_confirmation' label='Confirm Password' type='password' /> <br></br>
      <FormControlLabel control={<Checkbox value="agree" color="primary" name="tc" id="tc" />} label="I agree to term and condition." />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Sign In</Button>
      </Box>
      {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
    </Box>
    </Grid>
    </Grid>
  </>;
};

export default Registration;

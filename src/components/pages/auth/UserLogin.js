import { TextField, Button, Box, Alert } from '@mui/material';
import { useState } from 'react';
import pro from "../../images/pro.png"
import { NavLink, useNavigate } from 'react-router-dom';
const UserLogin = () => {
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
      email: data.get('email'),
      password: data.get('password'),
    }
    if (actualData.email && actualData.password) {
      console.log(actualData);
      document.getElementById('login-form').reset()
      setError({ status: true, msg: "Login Success", type: 'success' })
      navigate('/HomePage')
    } else {
      setError({ status: true, msg: "All Fields are Required", type: 'error' })
    }
  }

  return <>
    <Box component='form' noValidate sx={{ mt:3}} id='login-form' onSubmit={handleSubmit}>
    <img className='w-auto h-auto m-auto sm:h-[100px]' src={pro} alt='profile'/>
      <TextField margin='normal' required fullWidth id='email' name='email' label='username' />
      <TextField margin='normal' required fullWidth id='password' name='password' label='Password' type='password' />
      <Box textAlign='center'>
        <Button type='submit' variant='contained' sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
        <br></br>
        <NavLink to='/sendpasswordresetemail' >Forgot Password ?</NavLink>
        <br></br>
        <Button variant='contained' sx={{ mt:2, mb:0.5, px:4 }}>
        <NavLink to='/Registration' >Create new account</NavLink>
        </Button>
      </Box>
      {error.status ? <Alert severity={error.type} sx={{ mt: 3 }}>{error.msg}</Alert> : ''}
    </Box>
  </>;
};

export default UserLogin;

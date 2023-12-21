import { Button, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/LoginReg')
  }
  return <>
    <Grid container >
      <Grid item sm={3} sx={{ backgroundColor: 'gray', p: 8, color: 'white' }}>
        <h1>Profile Name</h1>
        <img src='https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png' alt='profile'></img>
        <Typography variant='h6'>Categories</Typography>
        <Typography variant='h6'>Donate List</Typography>
        <Typography variant='h6'>Settings</Typography>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={5}>
      
      </Grid>
    </Grid>
  </>;
};
export default Dashboard;

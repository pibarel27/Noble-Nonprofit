import { Button, Grid} from '@mui/material';
import { useNavigate} from 'react-router-dom';
const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/LoginReg')
  }
  const goTodonate = () => {
    navigate("/donate");
};
  return <>
    <Grid container >
      <Grid item sm={3} sx={{ backgroundColor: 'gray', p: 8, color: 'white' }}>
        <img src='https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png' alt='profile'></img>
        <button className='block h6 mr-2 px-[8px] hover:bg-gray-600'>Categories </button>
        <button  className='block h6 mr-2 px-[8px] hover:bg-gray-600'
                 onClick={goTodonate}>Donate</button>
        <button className='block h6 mr-2 px-[8px] hover:bg-gray-600'>Settings </button>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
      </Grid>
      <Grid item sm={5}>
      </Grid>
    </Grid>
  </>;
};
export default Dashboard;
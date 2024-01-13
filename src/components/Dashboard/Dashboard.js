import  {useState, React} from "react"
import { Button, Grid} from '@mui/material';
import { useNavigate} from 'react-router-dom';
import Donate from './donate';

const Dashboard = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Logout Clicked");
    navigate('/LoginReg')
  }
  const[showModal, setShowModal]= useState(false);
  
  return <>
    <Grid container >
      <Grid item sm={3} sx={{ backgroundColor: 'gray', p:8, color: 'white' }}>
        <img src='https://w7.pngwing.com/pngs/184/113/png-transparent-user-profile-computer-icons-profile-heroes-black-silhouette-thumbnail.png' alt='profile'></img>
        <div className="mt-8 ">
        <button className='block h6 p-2 px-[8px] text-lg hover:bg-gray-600'>About </button>
        <button className='block h6 p-2 px-[8px] text-lg hover:bg-gray-600'>Settings </button>
        <button className='block h6  p-2 px-[8px] text-lg hover:bg-gray-600'>Categories </button>
        <button className='block h6 p-2 px-[8px] text-lg hover:bg-gray-600'>Settings </button>
        <button onClick={()=> setShowModal(true)} className='block h6 p-2 px-[8px] text-lg hover:bg-gray-600'>Donate </button>
        </div>
        <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 6 }}>Logout</Button>
      </Grid>
      {showModal && <Donate onClose={() => setShowModal(false)} />}
    </Grid>
  </>;
};
export default Dashboard;
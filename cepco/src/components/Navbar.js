import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Navbar({openslidebar}) {
  

  return (
    <AppBar position="static">
     <div className='flex justify-between'>
      <div className='flex gap-3'>
      <Button onClick={() => {openslidebar()}}>span</Button>
      <div>logo</div>
      </div>
      <div>

{/* <Link>links</Link> */}


      </div>
     </div>
    </AppBar>
  );
}
export default Navbar;
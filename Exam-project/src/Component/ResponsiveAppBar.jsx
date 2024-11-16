import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

const ResponsiveAppBar = () => {
  return (
   <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            WELCOME TO OUR PAGE
          </Typography>

          <Link to={'/'}><Button style={{color:'white'}}>Login</Button></Link>
          <Button color="inherit">Register</Button>
          <Button color="inherit">View</Button>
          <Button color="inherit">Modify</Button>
        </Toolbar>
      </AppBar>
    </Box>
  </>
  )
}

export default ResponsiveAppBar
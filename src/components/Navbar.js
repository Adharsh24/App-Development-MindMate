import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <AppBar position="static" >
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </Typography>
        <Button color="inherit">
          <Link to="#about" style={{ textDecoration: 'none', color: 'white' }}>About Us</Link>
        </Button>
        <Button color="inherit">
          <Link to="#services" style={{ textDecoration: 'none', color: 'white' }}>Services</Link>
        </Button>
        <Button color="inherit">
          <Link to="#how-it-works" style={{ textDecoration: 'none', color: 'white' }}>How It Works</Link>
        </Button>
        <Button color="inherit">
          <Link to="#contact" style={{ textDecoration: 'none', color: 'white' }}>Contact Us</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;

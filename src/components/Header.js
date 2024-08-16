import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Header = () => {
  const { user, isAuthenticated } = useUser();

  return (
    <AppBar position="static" style={{ backgroundColor: '#501f3a' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <h1 style={{ color: '#cccccc' }}>PeacePath</h1>
        </Typography>
        {isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/profile" style={{ marginRight: '1rem' }}>
              <h3 style={{ color: '#cccccc' }}>{user.name}</h3>
            </Button>
            <Button color="inherit" component={Link} to="/logout">
              <h3 style={{ color: '#cccccc' }}>Logout</h3>
            </Button>
          </>
        ) : (
          <>
            <Button color="inherit" component={Link} to="/" style={{ marginRight: '1rem' }}>
              <h3 style={{ color: '#cccccc' }}>Home</h3>
            </Button>
            <Button color="inherit" component={Link} to="/signin" style={{ marginRight: '1rem' }}>
              <h3 style={{ color: '#cccccc' }}>Sign In</h3>
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              <h3 style={{ color: '#cccccc' }}>Sign Up</h3>
            </Button>
            
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

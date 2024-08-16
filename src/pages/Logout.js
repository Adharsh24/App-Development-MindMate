import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Container, Typography, Button } from '@mui/material';

const Logout = () => {
  const { setUser, setIsAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    navigate('/signin');
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        Logout
      </Typography>
      <Typography variant="body1" paragraph>
        You have been logged out. Click the button below to return to the sign-in page.
      </Typography>
      <Button
        variant="contained"
        style={{ backgroundColor: '#cb2d6f', color: 'white' }}
        onClick={handleLogout}
      >
        Sign In Again
      </Button>
    </Container>
  );
};

export default Logout;

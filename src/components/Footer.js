import React from 'react';
import { Typography, Container, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" style={{ backgroundColor: '#501f3a', padding: '1rem 0' }}>
      <Container>
        <Typography variant="body1" align="center" style={{ color: '#cccccc' }}>
         <h4>&copy; {new Date().getFullYear()} PeacePath. All rights reserved.</h4> 
        </Typography>
        <Typography variant="body2" align="center" style={{ color: '#cccccc' }}>
         <h4>Email: support@peacepath.com</h4> 
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;

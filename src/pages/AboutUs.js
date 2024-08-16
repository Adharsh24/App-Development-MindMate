import React from 'react';
import { Typography, Box } from '@mui/material';

const AboutUs = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" component="h2" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        PeacePath is dedicated to providing easy access to mental health monitoring and therapy.
      </Typography>
    </Box>
  );
};

export default AboutUs;

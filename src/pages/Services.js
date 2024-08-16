import React from 'react';
import { Typography, Box } from '@mui/material';

const Services = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" component="h2" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="body1">
        We offer a variety of mental health services including individual therapy, teen therapy, couples therapy, and medication management.
      </Typography>
    </Box>
  );
};

export default Services;

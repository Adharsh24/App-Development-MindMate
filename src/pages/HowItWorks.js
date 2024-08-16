import React from 'react';
import { Typography, Box } from '@mui/material';

const HowItWorks = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" component="h2" gutterBottom>
        How It Works
      </Typography>
      <Typography variant="body1">
        PeacePath allows you to track your mood, connect with therapists, and receive personalized insights.
      </Typography>
    </Box>
  );
};

export default HowItWorks;

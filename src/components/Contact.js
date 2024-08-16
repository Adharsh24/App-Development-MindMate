import React from 'react';
import { Paper, Typography } from '@mui/material';

const Contact = () => {
  return (
    <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: '#ffff99' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="body1">
        Email: support@peacepath.com
      </Typography>
    </Paper>
  );
};

export default Contact;

import React from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import './BlankPage.css'; // Make sure to create a CSS file for styling

const BlankPage = () => {
  return (
    <div className="blank-page">
      <Container>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100vh">
          <Typography variant="h4" component="h1" gutterBottom>
            What are your main goals?
          </Typography>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
            <Button variant="contained" color="primary" href="/learn01">Improve Sleep</Button>
            <Button variant="contained" color="primary" href="/learn01">Reduce Stress</Button>
            <Button variant="contained" color="primary" href="/learn01">Cope with Anxiety</Button>
            <Button variant="contained" color="primary" href="/learn01">Feel Happier</Button>
            <Button variant="contained" color="primary" href="/learn01">Boost Self-Esteem</Button>
            <Button variant="contained" color="primary" href="/learn01">Overcome Depression and Anger</Button>
            <Button variant="contained" color="primary" href="/learn01">Focus Better</Button>
            <Button variant="contained" color="primary" href="/learn01">Express Creativity</Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default BlankPage;

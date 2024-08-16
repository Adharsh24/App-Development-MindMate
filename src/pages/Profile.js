import React from 'react';
import { Container, Typography } from '@mui/material';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user } = useUser();

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>
        User Profile
      </Typography>
      <Typography variant="body1">
        <strong>Name:</strong> {user?.name}
      </Typography>
      <Typography variant="body1">
        <strong>Email:</strong> {user?.email}
      </Typography>
      <Typography variant="body1">
        <strong>Age:</strong> {user?.age}
      </Typography>
      <Typography variant="body1">
        <strong>Gender:</strong> {user?.gender}
      </Typography>
    </Container>
  );
};

export default Profile;

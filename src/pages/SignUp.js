import React, { useState } from 'react';
import { Container, Paper, Typography, TextField, Button, Grid, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !email || !password || !age || !gender) {
      setError('All fields are required');
      return;
    }

    try {
      const user = { name, email, password, age, gender };
      await axios.post('http://localhost:8080/api/users', user);
      navigate('/signin');
    } catch (error) {
      setError('An error occurred');
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem', backgroundColor: '#501f3a', color: 'white' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Sign Up
        </Typography>
        {error && <Typography color="error">{error}</Typography>}
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                InputProps={{ style: { backgroundColor: '#cccccc' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                InputProps={{ style: { backgroundColor: '#cccccc' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                InputProps={{ style: { backgroundColor: '#cccccc' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Age"
                variant="outlined"
                type="number"
                required
                value={age}
                onChange={(e) => setAge(e.target.value)}
                InputProps={{ style: { backgroundColor: '#cccccc' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Gender"
                variant="outlined"
                required
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                InputProps={{ style: { backgroundColor: '#cccccc' } }}
              >
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                style={{ backgroundColor: '#cb2d6f', color: 'white' }}
                type="submit"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default SignUp;

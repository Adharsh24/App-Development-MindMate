import React, { useState } from 'react';
import { Container, Grid, Typography, Paper, TextField, Button, Box, AppBar, Toolbar, IconButton, Menu, MenuItem } from '@mui/material';
import FeaturesCarousel from './FeaturesCarousel';
import FeatureCard from '../components/FeatureCard';
import Services from './Services';
import AboutUs from './AboutUs';
import HowItWorks from './HowItWorks';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend, PointElement);

const therapistTypes = [
  { title: 'Individual', description: 'Personalized sessions for individuals to address mental health needs.', image: '/individual.jpg', large: true, link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6998972/" },
  { title: 'Teen', description: 'Specialized sessions to support teenagers with their mental health.', image: '/teen.jpg', large: true, link: "https://www.nature.com/articles/d41586-021-02690-5" },
  { title: 'Couples', description: 'Therapy sessions designed for couples to improve their relationships.', image: '/couples.jpg', large: true, link: "https://www.psychologytoday.com/intl/blog/couples-thrive/201909/how-mental-illness-affects-romantic-relationships" },
  { title: 'Medication', description: 'Professional guidance on medication management for mental health.', image: '/medication.jpg', large: true, link: "https://www.nimh.nih.gov/health/topics/mental-health-medications", center: true },
];

const features = [
  { title: 'Always Available', description: 'Get support anytime, anywhere with our 24/7 service.', image: '/support.jpg', link: '/features' },
  { title: 'Tailored Solutions', description: 'Personalized notes and strategies designed specifically for you.', image: '/personalized.jpg', link: '/features' },
  { title: 'Top Experts', description: 'Work with highly skilled therapists who are experts in their field.', image: '/therapist.jpg', link: '/features' },
  { title: 'Privacy Assured', description: 'Your data and conversations are always secure and confidential.', image: '/secure.jpg', link: '/features' },
];

const LandingPage = () => {
  const [mood, setMood] = useState('');
  const [rating, setRating] = useState(0);
  const [moodEntries, setMoodEntries] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmitMood = () => {
    if (rating >= 1 && rating <= 10) {
      setMoodEntries([...moodEntries, rating]);
      setMood('');
      setRating(0);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const data = {
    labels: (moodEntries || []).map((_, index) => `Entry ${index + 1}`),
    datasets: [
      {
        label: 'Mood Rating',
        data: moodEntries || [],
        borderColor: '#cb2d6f',
        backgroundColor: 'rgba(203, 45, 111, 0.2)',
        pointBackgroundColor: '#cb2d6f',
      },
    ],
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static" >
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            
          </Typography>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
            
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleMenuClose}>
            <MenuItem onClick={handleMenuClose}>Home</MenuItem>
            <MenuItem onClick={handleMenuClose}>Features</MenuItem>
            <MenuItem onClick={handleMenuClose}>About Us</MenuItem>
            <MenuItem onClick={handleMenuClose}>Services</MenuItem>
            <MenuItem onClick={handleMenuClose}>How It Works</MenuItem>
            <MenuItem onClick={handleMenuClose}>Contact Us</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Container style={{ flex: 1 }}>
        <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: '#14a098' }} id="home">
          <Typography variant="h4" component="h1" gutterBottom >
             🪶 Track Your Mental Health with PeacePath
          </Typography>
          <Typography variant="body1">
            PeacePath helps you monitor your mental health with ease. Get started today!
          </Typography>
        </Paper>
        <Paper elevation={3} style={{ padding: '3rem', marginBottom: '3rem', backgroundColor: '#cccccc',textAlign:'centre' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Features
          </Typography>
          <FeaturesCarousel features={features} />
        </Paper>
        <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: '#cccccc' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Space to Figure Things Out
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            {therapistTypes.map((type, index) => (
              <Grid item xs={12} sm={6} md={4} key={index} style={{ textAlign: type.center ? 'center' : 'left' }}>
                <FeatureCard title={type.title} description={type.description} image={type.image} large={type.large} link={type.link} />
              </Grid>
            ))}
          </Grid>
        </Paper>
        <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: '#f4e1d2' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Check Your Mood
          </Typography>
          <Box mb={2}>
            <TextField
              label="How are you feeling today?"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={mood}
              onChange={handleMoodChange}
              style={{ backgroundColor: '#cccccc' }}
            />
          </Box>
          <Box mb={2}>
            <TextField
              label="Rate your mood (1-10)"
              variant="outlined"
              type="number"
              inputProps={{ min: 1, max: 10 }}
              fullWidth
              value={rating}
              onChange={handleRatingChange}
              style={{ backgroundColor: '#cccccc' }}
            />
          </Box>
          <Button variant="contained" color="primary" onClick={handleSubmitMood} style={{ backgroundColor: '#cb2d6f' }}>
            Submit Mood
          </Button>
        </Paper>
        <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: '#f4e1d2' }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Mood Chart
          </Typography>
          <Line data={data} />
        </Paper>
        <div id="about">
          <AboutUs />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Paper elevation={3} style={{ padding: '2rem', marginBottom: '2rem', backgroundColor: '#501f3a' }} id="contact">
          <Typography variant="h4" component="h2" gutterBottom style={{ color: 'white' }}>
            Contact Us
          </Typography>
          <Typography variant="body1" style={{ color: 'white' }}>
            Email: support@peacepath.com
          </Typography>
        </Paper>
      </Container>
      <Footer /> {/* Ensure the Footer is always at the bottom */}
    </div>
  );
};

export default LandingPage;

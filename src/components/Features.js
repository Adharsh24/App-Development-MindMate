// src/Features.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import FeaturesCarousel from './FeaturesCarousel';

const features = [
  {
    title: 'Feature 1',
    description: 'Description for feature 1',
    image: '/path/to/image1.jpg',
    link: '/feature1',
    large: true
  },
  {
    title: 'Feature 2',
    description: 'Description for feature 2',
    image: '/path/to/image2.jpg',
    link: '/feature2',
    large: false
  },
  // Add more features as needed
];

const Features = () => {
  return (
    <Box my={4}>
      <Container>
        <Typography variant="h4" gutterBottom>
          Our Features
        </Typography>
        <FeaturesCarousel features={features} />
      </Container>
    </Box>
  );
};

export default Features;

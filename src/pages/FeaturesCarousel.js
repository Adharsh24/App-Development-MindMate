import React from 'react';
import { Typography, Card, CardMedia, Box } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const features = [
  {
    title: 'Always Available',
    description: 'Receive support and guidance anytime, anywhere.',
    image: '/support.jpg', // Add the path to your image
  },
  {
    title: 'Tailored Solutions',
    description: 'Get personalized plans designed just for you.',
    image: '/personalized.jpg', // Add the path to your image
  },
  {
    title: 'Top Experts',
    description: 'Connect with experienced therapists who care.',
    image: '/therapist.jpg', // Add the path to your image
  },
  {
    title: 'Privacy Assured',
    description: 'Enjoy a confidential and secure experience.',
    image: '/secure.jpg', // Add the path to your image
  },
];

const FeaturesCarousel = () => {
  return (
    <Carousel>
      {features.map((feature, index) => (
        <Card key={index} style={{ backgroundColor: '#0f292f', position: 'relative' }}>
          <CardMedia
            component="img"
            sx={{
              width: '90%', // Slightly decreased width
              height: '450px', // Increased height
              objectFit: 'cover', // Ensure the image covers the area
              margin: 'auto', // Center the image
            }}
            image={feature.image}
            alt={feature.title}
          />
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '90%',
              textAlign: 'center',
              padding: '1rem',
              color: '#cccccc', // Text color changed
              backgroundColor:'#0f292f'
            }}
          >
            <Typography variant="h5" component="div">
              {feature.title}
            </Typography>
            <Typography variant="body2">
              {feature.description}
            </Typography>
          </Box>
        </Card>
      ))}
    </Carousel>
  );
};

export default FeaturesCarousel;

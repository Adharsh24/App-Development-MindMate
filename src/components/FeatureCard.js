import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import './FeatureCard.css';

const FeatureCard = ({ title, description, image, large, link }) => {
  return (
    <Card className="feature-card" style={{ width: large ? 345 : 300 }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <Button size="small" href={link}>Click here</Button>
    </Card>
  );
};

export default FeatureCard;

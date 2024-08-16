import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffcccb', // Light Red
    },
    secondary: {
      main: '#ffff99', // Light Yellow
    },
    background: {
      default: '#ffff99', // Light Yellow
      paper: '#ffcccb', // Light Red
    },
    text: {
      primary: '#000000', // Black for text
    },
  },
});

export default theme;

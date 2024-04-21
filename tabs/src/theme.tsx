import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#7529fa',
    },
    secondary: {
      main: '#fc5d03',
      dark: '#eb5600',
      light: '#ffecd1',
    },
  },
  typography: {
    button: {
      textTransform: 'lowercase',
    },
    fontFamily: [
      'Figtree',
      'sans-serif',
    ].join(','),
    h5: {
      textTransform: 'lowercase',
    },
    h6: {
      textTransform: 'lowercase',
    },
  },
});

export default theme;

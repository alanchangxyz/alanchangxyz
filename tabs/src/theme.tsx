import { createTheme, Palette } from '@mui/material/styles';

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
    gray: {
      main: "#888",
      dark: "#343",
      light: "#aaa",
    }
  },
  typography: {
    button: {
      textTransform: 'lowercase',
    },
    fontFamily: [
      'Figtree',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.4rem',
      // fontSize: '36px',
      fontWeight: 800,
      marginTop: '1rem',
      marginBottom: '0.1rem',
    },
    h2: {
      fontSize: '2rem',
      // fontSize: '32px',
      fontWeight: 800,
    },
    h5: {
      textTransform: 'lowercase',
    },
    h6: {
      fontSize: '1.2rem',
      fontWeight: 500,
      marginTop: '0.05rem',
    }
  },
});

declare module '@mui/material/styles' {
  interface PaletteColor {
    gray: Palette['primary'];
  }

  interface PaletteOptions {
    gray?: PaletteOptions['primary'];
  }

  interface TypographyVariants {
    // h1Lowercase: React.CSSProperties;
  }

  // allow configuration using createTheme
  interface TypographyVariantsOptions {
    // h1Lowercase?: React.CSSProperties;
  }
}

// update Typography variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    // h1Lowercase: true;
  }
}

export default theme;

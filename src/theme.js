import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    h1: {
      fontSize: '70px',
      fontStyle: 'Bold',
      lineHeight: '104px',
    },
    h2: {
      fontSize: '32px',
      fontWeight: '400',
    },
    h3: {
      fontSize: '28px',
      fontWeight: '400',
    },
    h4: {
      fontSize: '22px',
      lineHeight: '31px',
    },
    h5: {
      fontSize: '14px',
      lineHeight: '23px',
    },
    h6: {
      fontSize: '11px',
      fontWeight: 'bold',
      lineHeight: '18px',
    },
  },
});

export default theme;

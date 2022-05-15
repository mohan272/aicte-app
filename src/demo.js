import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { purple } from '@mui/material/colors';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F75700',
      contrastText: '#fff'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  );
}
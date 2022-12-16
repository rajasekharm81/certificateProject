import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#11cbef",
      contrastText: '#fff',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
      contrastText: '#ffffff',
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Button variant="contained">Primary</Button>
      <Button variant="contained" color="secondary">Secondary</Button>
    </ThemeProvider>
  );
}
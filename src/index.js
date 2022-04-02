import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark'},
    status: {
      danger: orange[500],
  },
});



ReactDOM.render(
  <React.StrictMode>
<ThemeProvider theme={theme}>
<App />
</ThemeProvider>,
</React.StrictMode>,

  document.getElementById('root')
);


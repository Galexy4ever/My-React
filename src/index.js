
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {deepOrange } from '@mui/material/colors'

import {createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    background: {
      default: deepOrange[900],
      paper: deepOrange[900],
    }},
});




ReactDOM.render(

<ThemeProvider theme={theme}>
<App />,
</ThemeProvider>,


  document.getElementById('root')
);






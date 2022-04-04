
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { orange } from '@mui/material/colors';
import {createTheme, ThemeProvider } from '@mui/material/styles'

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});




ReactDOM.render(

<ThemeProvider theme={theme}>
<App />,
</ThemeProvider>,


  document.getElementById('root')
);






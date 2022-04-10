
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import store from './Components/store/index';
import {createTheme, ThemeProvider } from '@mui/material/styles'



const theme = createTheme({
  palette: {
    mode: 'light'
    },
});




ReactDOM.render(

<ThemeProvider theme={theme}>

<Provider store = {store}>
<App />
</Provider>
</ThemeProvider>,



  document.getElementById('root')
);






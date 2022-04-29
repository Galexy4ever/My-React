import { PersistGate } from 'redux-persist/integration/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";
import {createTheme, ThemeProvider } from '@mui/material/styles'
import persistor from './Components/store/index';
import {store} from './Components/store/index'
import { CircularProgress } from '@mui/material';
const theme = createTheme({
  palette: {
    mode: 'light'
    },
});




ReactDOM.render(
  <Provider store = {store}>
  <PersistGate persistor={persistor} loading ={<CircularProgress />}>
<ThemeProvider theme={theme}>


<App />

</ThemeProvider>
</PersistGate>
</Provider>,


  document.getElementById('root')
);






import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import 'typeface-roboto';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>
);
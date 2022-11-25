import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import 'typeface-roboto';
import { MainContextProvider } from './context/main-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainContextProvider>
        <App />
      </MainContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
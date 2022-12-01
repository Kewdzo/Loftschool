import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import { theme } from "loft-taxi-mui-theme";
import { ThemeProvider } from "@material-ui/core/styles";
import 'typeface-roboto';
import reportWebVitals from "./reportWebVitals";
import { MainContextProvider } from './context/main-context';
import { Provider } from 'react-redux';
import createStore from './store';

const store = createStore();
store.subscribe(() => {
  console.log("Store updated");
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainContextProvider>
      <Provider store={store}>
          <App />
          </Provider>,
      </MainContextProvider>
    </ThemeProvider>
  </React.StrictMode>

);

reportWebVitals();



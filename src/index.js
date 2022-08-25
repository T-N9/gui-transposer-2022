import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/store';
import { ThemeProvider } from '@mui/material';
import {AlertContextProvider} from './util/AlertContext';

import theme from './Theme';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <AlertContextProvider>
            <App />
          </AlertContextProvider>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
);

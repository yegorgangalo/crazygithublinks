import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { SnackbarProvider } from 'notistack'
import './index.css';
import App from './App';



ReactDOM.render(
  <SnackbarProvider maxSnack={3}>
    <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </React.StrictMode>
  </SnackbarProvider>,
  document.getElementById('root')
);

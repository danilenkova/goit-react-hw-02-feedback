import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import { ThemeProvider } from 'styled-components';
import './index.css';
import App from './App';

const theme = {
  colors: {
    white: '#ffffff',
    green: '#91e994',
    red: '#f1948e',
    yellow: '#f5f784',
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

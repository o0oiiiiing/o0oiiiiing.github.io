import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/commons/reset.css';
import './styles/commons/font.css';
import './styles/mediaQuery/styles_0-479.css';
import './styles/mediaQuery/styles_480-767.css';
import './styles/mediaQuery/styles_768-1023.css';
import './styles/mediaQuery/styles_1024-1279.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

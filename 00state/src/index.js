import React, {useState} from 'react';
import * as reactDom from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = document.getElementById('root');
const container = reactDom.createRoot(root);

container.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);






reportWebVitals();

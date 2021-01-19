import React from 'react';
import ReactDOM from 'react-dom';
import './main/assets/index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './main/App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

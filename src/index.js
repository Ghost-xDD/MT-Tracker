import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppContext from './AppContext';
import 'react-alice-carousel/lib/alice-carousel.css';

ReactDOM.render(
  <AppContext>
    <App />
  </AppContext>,
  document.getElementById('root')
);

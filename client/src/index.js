import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/Store/Store.js';
import { Provider } from 'react-redux';

// axios.defaults =  `www.google.com`


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter outer>
      <App />
    </BrowserRouter>
  </Provider>
); 
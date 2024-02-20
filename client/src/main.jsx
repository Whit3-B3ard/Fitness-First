import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import UserContextProvider from './context/UserContext';

import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <UserContextProvider>
    <Routes />
  </UserContextProvider>
  </BrowserRouter>
);

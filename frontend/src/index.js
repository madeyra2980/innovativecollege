import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { DateProvider } from './Context/ContextApp'; // Импортируем провайдер

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <DateProvider>
       <App />
       </DateProvider>
       </BrowserRouter>
  </React.StrictMode>
);

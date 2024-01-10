import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';

import 'css/index.css';
import 'css/variables.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/studio-svyripa">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

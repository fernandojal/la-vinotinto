// Vendors
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

// Store
import reportWebVitals from './reportWebVitals';

if (process.env.SERVICE_MOCK) {
  const { worker } = require('./mocks/browser');
  worker.start();
}

const rootElement = document.getElementById('root');
const root = rootElement && createRoot(rootElement);

root?.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import TestServer from './components/ui/TestServer';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TestServer>
        <App />
      </TestServer>
    </BrowserRouter>
  </React.StrictMode>
);

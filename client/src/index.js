import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ModeContextProvider } from './context/ModeContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModeContextProvider>
        <AuthContextProvider>
          <App />
        </AuthContextProvider>
      </ModeContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
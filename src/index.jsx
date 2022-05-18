import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { ContactProvider } from './context/ContactContext';
import { UserProvider } from './context/UserContext';

render(
  <React.StrictMode>
    <UserProvider>
      <ContactProvider>
        <App />
      </ContactProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ correct import

import App from './App';
import { ThemeContextProvider } from './contexts/themeContext';

// For React 18+
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);

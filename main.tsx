import { Fragment, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

import './index.css';
import { ThemeProvider } from './common/ThemeContext';





createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);


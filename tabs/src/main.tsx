import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';

import App from './App';
import Tab from './views/Tab/Tab';
import Tabs from './views/Tabs/Tabs';

import theme from './theme';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider {...{ theme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/tabs/:id" element={<Tab />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
);

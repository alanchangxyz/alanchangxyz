import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';

import ProtectedRoute from './auth/ProtectedRoute';
import VenmoRedirect from './components/VenmoRedirect';
import { AuthProvider } from './auth/context';

import Home from './views/Home/Home';
import Tab from './views/Tab/Tab';
import Tabs from './views/Tabs/Tabs';

import theme from './theme';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider {...{ theme }}>
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tabs" element={(
                <ProtectedRoute redirect="/">
                  <Tabs />
                </ProtectedRoute>
              )} />
              <Route path="/tabs/:id" element={<Tab />} />
              <Route path="/venmo/:venmo" element={<VenmoRedirect />} />
              {/* <Route path="/venmotest" element={<Navigate to="/venmo/alanchangxyz" state={{ amount: 20.71, mode: "pay" }} />} /> */}
              <Route path="/*" element={<Navigate to="/tabs" />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
);

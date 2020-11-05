import React from 'react';
import { ThemeProvider } from 'styled-components';

import dark from '../styles/themes/dark';
import settingsStyles from '../styles/settings';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={{ ...dark, ...settingsStyles }}>
      <AuthProvider>
        <ToastProvider>{children}</ToastProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default AppProvider;

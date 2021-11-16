import React from 'react';
import { AuthProvider } from './auth';
import { MultiProvider } from './multi';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <MultiProvider>
      {children}
    </MultiProvider>
  </AuthProvider>
);


export default AppProvider;

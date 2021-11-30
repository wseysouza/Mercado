import React from 'react';
import { MultiProvider } from './multi';

const AppProvider: React.FC = ({ children }) => (
  <MultiProvider>
    {children}
  </MultiProvider>
);

export default AppProvider;

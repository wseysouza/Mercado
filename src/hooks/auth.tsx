import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import { api } from '@services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthContextData {
  signIn(): Promise<string>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const signIn = useCallback(async () => {
    try {
      const response = await api.get('login', {
        auth: {
          username: "joao@nada.com",
          password: '12345678',
        }
      });

      const { login: { token } } = response.data;

      localStorage.setItem('@MultiMercado:token', token);

      return token;
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('@dynzup:token');
    // setIsAuthenticated(typeof token === 'string');
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      signIn();
    }
  }, [isAuthenticated, signIn]);

  return (
    <AuthContext.Provider
      value={{ signIn }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

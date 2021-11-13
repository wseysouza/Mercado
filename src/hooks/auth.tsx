import React, { useState, useCallback, useContext, createContext, useEffect } from 'react';
import { api } from '@services/api';

interface User {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
}

interface AuthState {
  token: string;
  user?: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {



    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    // const response = await api.get('login', { data: { email, password } });

    // console.log('response >> ', response)
    console.log('response >> ')

    // const { token } = response.data;
    // localStorage.setItem('@MultiMercado:token', token);
    // localStorage.setItem('@MultiMercado:user', JSON.stringify(user));

    // api.defaults.headers.authorization = token;

    // setData({ token });
  }, []);




  useEffect(() => {
    signIn({ email: "joao@nada.com", password: "password" });
  }, [])

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn }}
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

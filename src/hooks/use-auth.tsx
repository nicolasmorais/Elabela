"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: () => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const checkAuth = () => {
    const authCookie = Cookies.get('auth_session');
    setIsAuthenticated(authCookie === 'true');
    setIsLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = () => {
    // Persiste no cookie para o middleware e refresh
    Cookies.set('auth_session', 'true', { expires: 1 }); // 1 dia
    setIsAuthenticated(true);
  };
  
  const logout = () => {
    Cookies.remove('auth_session');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error(
      '⚠️ useAuth deve ser usado dentro de um AuthProvider! ' +
      'Verifique se o AuthProvider está envolvendo sua aplicação no arquivo src/app/layout.tsx'
    );
  }
  
  return context;
}
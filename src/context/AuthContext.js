import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null); // Store the token here

  const login = (userToken) => {
    setToken(userToken); // Set the token after successful login
  };

  const logout = () => {
    setToken(null); // Clear the token when logging out
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

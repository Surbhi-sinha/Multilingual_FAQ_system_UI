import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [role, setRole] = useState('user'); // Default role is user

  return (
    <UserContext.Provider value={{ role, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;

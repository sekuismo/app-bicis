import React, { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Inicializa userType desde localStorage si existe, de lo contrario usa 'desconectado'
  const [userType, setUserType] = useState(() => {
    // Intenta leer el usuario almacenado en localStorage
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser).type : 'desconectado';
  });

  useEffect(() => {
    // Actualizar localStorage cuando userType cambia
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      user.type = userType;
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [userType]);

  return (
    <UserContext.Provider value={{ userType, setUserType }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser debe ser utilizado dentro de un UserProvider');
  }
  return context;
};

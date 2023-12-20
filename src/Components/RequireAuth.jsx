import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useUser } from '../Context';

const RequireAuth = ({ children, allowedUsers }) => {
  const { userType } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Si userType no está definido o es 'desconectado', o no está permitido, redirigir a login
    if (!userType || userType === 'desconectado' || (allowedUsers && !allowedUsers.includes(userType))) {
      navigate('/login', { state: { from: location }, replace: true });
    }
  }, [userType, navigate, location, allowedUsers]);

  // Si userType es válido, no es 'desconectado' y está permitido, renderizar children
  return (userType && userType !== 'desconectado' && (!allowedUsers || allowedUsers.includes(userType))) ? children : null;
};

export default RequireAuth;

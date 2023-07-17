import { AuthContext } from '@/context/AuthContext';
import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoutes = () => {
  const user = useContext(AuthContext);

  return user ? <Outlet /> : <Navigate to="/login" />;
};

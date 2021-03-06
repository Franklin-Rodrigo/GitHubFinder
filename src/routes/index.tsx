import React from 'react';
import { useAuth } from '../Hooks/Auth';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

const Routes: React.FC = () => {
  const { signed } = useAuth();
  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
import { useAuth } from '@/providers/AuthProvider';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface AuthGuardProps {
  requireAuth: boolean;
  redirectTo: string;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ requireAuth, redirectTo }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <div className='w-full mt-[8vh] h-[92vh] bg-inherit flex justify-center items-center'>Loading...</div>;
  }

  if (requireAuth && !user) {
    return <Navigate to={redirectTo} replace />;
  }

  if (!requireAuth && user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default AuthGuard;
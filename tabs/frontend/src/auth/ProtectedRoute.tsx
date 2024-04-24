import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from './context';

interface ProtectedRouteProps {
  children: ReactElement | ReactElement[];
  redirect: string;
}

const ProtectedRoute = ({ children, redirect }: ProtectedRouteProps) => {
  const { isLoggedIn, setShowLoginRequiredAlert } = useAuth();
  const navigate = useNavigate();
  if (!isLoggedIn) {
    setShowLoginRequiredAlert(true);
    navigate(redirect);
  }

  return isLoggedIn && <>{children}</>;
};

export default ProtectedRoute;

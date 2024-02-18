import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import { useEffect } from 'react';

function ProtectedRoutes({ children }) {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);
  return isAuthenticated ? children : null;
}

export default ProtectedRoutes;

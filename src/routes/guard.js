import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Guard = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname !== '/' && location?.pathname !== '/counter' && location?.pathname !== '/parent' && location?.pathname !== '/data-fetcher' && location?.pathname !== '/login-form' && location?.pathname !== '/card-container' && location?.pathname !== '/todo-form' && location?.pathname !== '/todo-list'  && !location?.pathname.match('/edit-todo/')) navigate('/', { replace: true });
  }, [navigate, location]);
  return children;
};

export default Guard;

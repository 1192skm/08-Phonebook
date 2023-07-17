import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn, selectIsRefreshing } from 'redux/Auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isReffreshing = useSelector(selectIsRefreshing)
    const shouldRedirect = !isLoggedIn && !isReffreshing;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

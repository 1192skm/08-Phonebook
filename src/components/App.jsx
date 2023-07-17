import { Routes, Route } from 'react-router-dom';
// import css from './App.module.css';
import { Layout } from './Layout';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/Auth/authOperations';
import { selectIsRefreshing } from 'redux/Auth/authSelectors';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                component={RegisterPage}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute
                component={ContactsPage}
                redirectTo="/login"
              />
            }
          />
        </Route>
      </Routes>
    )
  );
}

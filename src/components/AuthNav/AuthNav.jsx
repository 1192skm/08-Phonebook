import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

export function AuthNav() {
  return (
    <div>
      <NavLink className={css.link} to="/register">
        Register___
      </NavLink>
      <NavLink className={css.link} to="/login">
        Log In____
      </NavLink>
    </div>
  );
}

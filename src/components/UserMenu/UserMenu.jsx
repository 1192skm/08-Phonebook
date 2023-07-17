import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUser } from 'redux/Auth/authSelectors';
import { logOut } from 'redux/Auth/authOperations';

export function UserMenu() {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);
  const handleLogOut = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.usermenu}>
      <p className={css.userwelcome}>
        Welcome, <span className={css.username}>{name}</span>{' '}
      </p>
      <button className={css.btn }type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
}

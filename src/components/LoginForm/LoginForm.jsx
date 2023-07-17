import { useDispatch } from "react-redux";
import { logIn } from "redux/Auth/authOperations";
import css from './LoginForm.module.css';

export function LoginForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.container}>
      <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
        <label className={css.label}>
          <span className={css.title}>Email</span>
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          <span className={css.title}>Password</span>
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}

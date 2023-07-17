import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import css from './RegisterForm.module.css'

export function RegisterForm() {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <span className={css.title}>Username</span>
          <input className={css.input} type="text" name="name" />
        </label>
        <label className={css.label}>
          <span className={css.title}>Email</span>
          <input className={css.input} type="email" name="email" />
        </label>
        <label className={css.label}>
          <span className={css.title}>Password</span>
          <input className={css.input} type="password" name="password" />
        </label>
        <button className={css.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

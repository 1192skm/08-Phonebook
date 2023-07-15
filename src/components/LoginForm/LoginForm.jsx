export function LoginForm() {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    form.reset();
  };

  return (
    <form onClick={handleSubmit} autoComplete="off">
      <label>
        Email
        <input type="email" name="email" />
      </label>
      <label>
        Password
        <input type="password" name="password" />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
}

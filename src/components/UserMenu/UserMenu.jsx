import css from './UserMenu.module.css'

export function UserMenu() {
    return (
      <div className={css.usermenu}>
        <p className={css.username}>mango@mail.com</p>
        <button type="button">Logout</button>
      </div>
    );
}
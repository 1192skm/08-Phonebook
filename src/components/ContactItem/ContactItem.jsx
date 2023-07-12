import css from './ContactItem.module.css';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import { RotatingLines } from 'react-loader-spinner';


export function ContactItem({id, name, number}) {
    const [deleteContact, { isLoading: isDeleting }] =
      useDeleteContactMutation();

    return (
      <li className={css.listitem} key={id}>
        <p className={css.listcontact}>
          {name}: {number}
        </p>
        <button
          className={css.btn}
          onClick={() => deleteContact(id)}
          type="button"
        >
          {isDeleting ? <RotatingLines width="14" /> : 'Delete'}
        </button>
      </li>
    );
}
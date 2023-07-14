import css from './ContactItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/Contacts/operations';



export function ContactItem({id, name, number}) {

  const dispatch = useDispatch();
  const handleDelete = ()=> dispatch(deleteContact(id))

    return (
      <li className={css.listitem} key={id}>
        <p className={css.listcontact}>
          {name}: {number}
        </p>
        <button className={css.btn} onClick={handleDelete} type="button">
          Delete
        </button>
      </li>
    );
}
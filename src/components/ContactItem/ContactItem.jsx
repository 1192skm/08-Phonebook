import css from './ContactItem.module.css';
import { RotatingLines } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { getIsLoading } from 'redux/selectors';


export function ContactItem({id, name, number}) {
    // const [deleteContact, { isLoading: isDeleting }] =
    //   useDeleteContactMutation();
  const isDeleting = useSelector(getIsLoading)
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
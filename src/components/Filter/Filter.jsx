import css from './Filter.module.css';
import { filterContact } from 'redux/Contacts/filterSlice';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useDispatch } from 'react-redux';
import { getFilter } from 'redux/Contacts/selectors';

export function Filter() {
 const dispatch = useDispatch();
  const handleFilter = evt => dispatch(filterContact(evt.currentTarget.value));
  const filter = useSelector(getFilter);
  

  return (
    <label className={css.formlabel}>
      <span className={css.formtitle}>Find contacts by name:</span>
      <input
        className={css.forminput}
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </label>
  );
}



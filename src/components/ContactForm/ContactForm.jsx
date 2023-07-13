import { useState } from 'react';
import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading } from 'redux/selectors';
import { addContact } from 'redux/operations';


export function ContactForm({contacts}) {

  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);


  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const reset = () => {
    setName('');
    setNumber('');
  };
  const handleInputChange = evt => {
    const { name, value } = evt.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = evt => {
    evt.preventDefault();
    const newContact = {
      name,
      number,
    };

    console.log(contacts);
    contacts.some(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already contact`)
      : dispatch(addContact(newContact));
    reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.formlabel}>
        <span className={css.formtitle}>Name</span>
        <input
          className={css.forminput}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.formlabel}>
        <span className={css.formtitle}>Number</span>
        <input
          className={css.forminput}
          type="tel"
          name="number"
          value={number}
          onChange={handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { getContacts, getError, getFilter, getIsLoading } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { RotatingLines } from 'react-loader-spinner';
import { Spinner } from './Spinner/Spinner';

export function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
    const filter = useSelector(getFilter);
    const contacts = useSelector(getContacts);

  useEffect(() => { dispatch(fetchContacts()); }, [dispatch]);



  const normFilter = filter.toLocaleLowerCase();
  const findContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.accent}>book</span>
      </h1>
      <ContactForm contacts={findContacts} />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {isLoading && <Spinner/>}
      {contacts && !error && (
        <ContactList findContacts={findContacts} />
      )}
    </div>
  );
}

import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import css from './App.module.css';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';

export function App() {
  const { data: contacts, isFetching } = useGetContactsQuery();

  const filter = useSelector(getFilter);

  const normFilter = filter.toLocaleLowerCase();
  let findContacts = [];
  if (contacts) {
    findContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normFilter)
    );
  }
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Phone<span className={css.accent}>book</span>
      </h1>
      <ContactForm contacts={findContacts} />

      <h2 className={css.subtitle}>Contacts</h2>
      <Filter />
      {contacts && !isFetching && <ContactList findContacts={findContacts} />}
    </div>
  );
}

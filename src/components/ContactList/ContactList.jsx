import css from './ContactList.module.css';
import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({ findContacts }) {

  return (
    <ul className={css.list}>
      {findContacts
        .sort((firstContact, secondContact) =>
          firstContact.name.localeCompare(secondContact.name)
        )
        .map(findContact => (
          <ContactItem key={findContact.id} {...findContact} />
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  findContacts: PropTypes.arrayOf(PropTypes.object),
};

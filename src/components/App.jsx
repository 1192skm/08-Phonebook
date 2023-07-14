import { Routes, Route } from 'react-router-dom';
import css from './App.module.css';
import { Layout } from './Layout';
import { lazy } from 'react';
// import { Home } from 'pages/Home';
// import { Login } from 'pages/Login';
// import { Register } from 'pages/Register';
// import { Contacts } from 'pages/Contacts';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/users/login" element={<LoginPage />} />
        <Route path="/users/signup" element={<RegisterPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};

// import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
// import { ContactList } from './ContactList/ContactList';
// import css from './App.module.css';
// import { useSelector } from 'react-redux/es/hooks/useSelector';
// import { getContacts, getError, getFilter, getIsLoading } from 'redux/selectors';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts } from 'redux/operations';

// import { Spinner } from './Spinner/Spinner';

// export function App() {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);
//     const filter = useSelector(getFilter);
//     const contacts = useSelector(getContacts);

//   useEffect(() => { dispatch(fetchContacts()); }, [dispatch]);

//   const normFilter = filter.toLocaleLowerCase();
//   const findContacts = contacts.filter(contact =>
//       contact.name.toLowerCase().includes(normFilter)
//     );

//   return (
//     <div className={css.container}>
//       <h1 className={css.title}>
//         Phone<span className={css.accent}>book</span>
//       </h1>
//       <ContactForm contacts={findContacts} />

//       <h2 className={css.subtitle}>Contacts</h2>
//       <Filter />
//       {isLoading && <Spinner/>}
//       {contacts && !error && (
//         <ContactList findContacts={findContacts} />
//       )}
//     </div>
//   );
// }

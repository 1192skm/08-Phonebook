import css from './Home.module.css'
const Home = () => { 
    return (
      <p className={css.mainwelcome}>
        Welcome to Phone<span className={css.accent}>book</span>.app
      </p>
    );
};

export default Home;
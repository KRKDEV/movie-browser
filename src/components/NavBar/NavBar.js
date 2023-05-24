import { Link, useLocation } from 'react-router-dom';

import css from './NavBar.module.css';
const NavBar = () => {
  const location = useLocation();
  return (
    <header>
      <div className={css['navbar__container']}>
        <Link
          to="/"
          className={
            location.pathname === '/' ? css.active : css['navbar__link']
          }
        >
          Home
        </Link>
        <Link
          to="/movies"
          className={
            location.pathname === '/movies' ? css.active : css['navbar__link']
          }
        >
          Movies
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

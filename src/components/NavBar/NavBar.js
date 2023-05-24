import { Link } from 'react-router-dom';
import css from './NavBar.module.css';
const NavBar = () => {
  return (
    <header>
      <div className={css['navbar__container']}>
        <Link to="/" className={css['navbar__link']}>
          Home
        </Link>
      </div>
    </header>
  );
};

export default NavBar;

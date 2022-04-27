import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav>
      <div>
        <a href='/'>
          <span
            className={
              styles.icon + ' fa fa-tasks'
            }
          />
        </a>
      </div>
      <div className={styles.pages}>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.linkActive
              : undefined
          }
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.linkActive
              : undefined
          }
          to='/favorite'
        >
          Favorite
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? styles.linkActive
              : undefined
          }
          to='/About'
        >
          About{' '}
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;

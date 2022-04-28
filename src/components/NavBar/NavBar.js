import { NavLink } from 'react-router-dom';
import { Pages } from './Consts';
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
        {Pages.map(({ path, name }) => (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? styles.linkActive
                : undefined
            }
            key={name}
            to={path}
          >
            {name}
          </NavLink>
        ))}
        ;
      </div>
    </nav>
  );
};

export default NavBar;

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
        <a href='/'>Home</a>
        <a href='/Favorite'>Favorite</a>
        <a href='/About'>About</a>
      </div>
    </nav>
  );
};

export default NavBar;

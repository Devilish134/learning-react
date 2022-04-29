import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <PageTitle>404 NOT FOUND</PageTitle>
      <p className={styles.text}>
        page address is wrong or list don't
        exist. Please verify and change if
        needed.
      </p>
    </>
  );
};

export default NotFound;

import PageTitle from '../PageTitle/PageTitle';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <>
      <PageTitle>404 NOT FOUND</PageTitle>
      <p className={styles.text}>
        page adress is wrong. Please verify and
        change if needed.
      </p>
    </>
  );
};

export default NotFound;

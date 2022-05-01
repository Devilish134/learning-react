import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({ title }) => {
  return (
    <li className={styles.card}>
      {title}
      <span
        className={clsx('  fa fa-star-o')}
      />
    </li>
  );
};

export default Card;

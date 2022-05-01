import styles from './Card.module.scss';
import clsx from 'clsx';
import { toggleFavorite } from '../../redux/store';
import { useDispatch } from 'react-redux';

const Card = ({ title, id, isFavorite }) => {
  const dispatch = useDispatch();
  const cardId = id;

  const classChange = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(cardId));
  };

  return (
    <li className={styles.card}>
      {title}
      <button
        onClick={classChange}
        className={clsx(
          styles.button,
          isFavorite && styles.favorite
        )}
      >
        <span className='fa fa-star-o' />
      </button>
    </li>
  );
};

export default Card;

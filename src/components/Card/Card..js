import { useDispatch } from 'react-redux';
import {
  removeTitle,
  toggleFavorite,
} from '../../redux/cardsRedux';
import styles from './Card.module.scss';
import clsx from 'clsx';

const Card = ({ title, id, isFavorite }) => {
  const dispatch = useDispatch();
  const cardId = id;

  const classChange = (e) => {
    e.preventDefault();
    dispatch(toggleFavorite(cardId));
  };

  const remove = (e) => {
    e.preventDefault();
    dispatch(removeTitle(cardId));
  };

  return (
    <li className={styles.card}>
      {title}
      <div>
        <button
          onClick={classChange}
          className={clsx(
            styles.button,
            isFavorite && styles.favorite
          )}
        >
          <span className='fa fa-star-o' />
        </button>
        <button
          onClick={remove}
          className={styles.button}
        >
          <span className='fa fa-trash' />
        </button>
      </div>
    </li>
  );
};

export default Card;

import styles from './Favorite.module.scss';
import Card from '../Card/Card.';
import PageTitle from '../PageTitle/PageTitle';
import { useSelector } from 'react-redux';
import { getFavorite } from '../../redux/store';

const Favorite = (id) => {
  const favorites = useSelector((state) =>
    getFavorite(state, id)
  );
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <div className={styles.favoriteColumn}>
        <ul className={styles.cards}>
          {favorites.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              id={card.id}
              isFavorite={card.isFavorite}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Favorite;

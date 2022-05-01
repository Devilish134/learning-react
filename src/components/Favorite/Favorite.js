import Card from '../Card/Card.';
import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const Favorite = (card, id, action) => {
  return (
    <div>
      <PageTitle>Favorite</PageTitle>
      <p>Here are Your Favorite titles</p>
      <article className={styles.column}>
        <ul className={styles.cards}>
          <Card
            key={card.id}
            title={card.title}
          />
        </ul>
      </article>
    </div>
  );
};

export default Favorite;

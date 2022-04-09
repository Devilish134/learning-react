import styles from './List.module.scss'
import Column from '../Column/Column';

const List = () => {
  return (
    <div>
      <header className={styles.header}>
        <h1 className={styles.title}>Things to do <span className={styles.span}>soon</span></h1>
      </header>
      <p className={styles.description}>Interesting things I want to check out</p>
      <section className={styles.columns}>
        <Column title="Books" />
        <Column title="Games" />
        <Column title="Movies" />
      </section>  
    </div>
  );
};

export default List
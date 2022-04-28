import { useSelector } from 'react-redux';
import {
  getAllColumns,
  getColumnsByList,
  getListById,
} from '../../redux/store';
import styles from './List.module.scss';
import Column from '../Column/Column';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useParams } from 'react-router';

const List = () => {
  //const listId = useParams();
  const listId = 1;
  const columns = useSelector((state) =>
    getColumnsByList(state, listId)
  );
  const listData = useSelector((state) =>
    getListById(state, listId)
  );
  console.log(listData);

  return (
    <div className={styles.list}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          {listData.title}
        </h2>
      </header>
      <p className={styles.description}>
        {listData.description}
      </p>
      <section className={styles.columns}>
        {columns.map((column) => (
          <Column key={column.id} {...column} />
        ))}
      </section>
      <ColumnForm />
    </div>
  );
};

export default List;

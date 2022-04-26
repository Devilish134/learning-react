import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTitle } from '../../redux/store';

const CardForm = ({ columnId }) => {
  const dispatch = useDispatch();

  const [title, setTilte] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTitle({
        id: shortid(),
        columnId,
        title,
      })
    );
    setTilte('');
  };

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
      <TextInput
        placeholder='Title'
        value={title}
        onChange={(e) =>
          setTilte(e.target.value)
        }
      />
      <Button>Add Title</Button>
    </form>
  );
};

export default CardForm;

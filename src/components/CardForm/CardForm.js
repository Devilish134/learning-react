import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTitle } from '../../redux/cardsRedux';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';

const CardForm = ({ columnId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTitle({
        id: shortid(),
        columnId,
        title,
      })
    );
    setTitle('');
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
          setTitle(e.target.value)
        }
      />
      <Button>Add Title</Button>
    </form>
  );
};

export default CardForm;

import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

const ColumnForm = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_COLUMN',
      payload: {
        id: shortid(),
        title,
        icon,
      },
    });
    setTitle('');
    setIcon('');
  };

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
      <TextInput
        placeholder='Category'
        vale={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />
      <TextInput
        placeholder='Icon'
        value={icon}
        onChange={(e) =>
          setIcon(e.target.value)
        }
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;

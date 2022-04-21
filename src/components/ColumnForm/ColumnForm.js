import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';

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
        title={title}
        onChange={(e) =>
          setTitle(e.target.value)
        }
      />
      <TextInput
        placeholder='Icon'
        title={icon}
        onChange={(e) =>
          setIcon(e.target.value)
        }
      />
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;

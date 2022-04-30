import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/store';

const ListsForm = ({ listId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] =
    useState('');

  const Inputs = [
    {
      placeholder: 'Title',
      value: title,
      onChange: (e) => setTitle(e.target.value),
    },
    {
      placeholder: 'Description',
      value: description,
      onChange: (e) =>
        setDescription(e.target.value),
    },
  ];

  return (
    <form className={styles.searchForm}>
      {Inputs.map(
        ({ placeholder, value, onChange }) => (
          <TextInput
            key={placeholder}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
        )
      )}
      <Button>Add column</Button>
    </form>
  );
};

export default ListsForm;

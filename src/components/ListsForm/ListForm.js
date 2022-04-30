import styles from './ListForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/store';

const ListsForm = ({ listId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] =
    useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addList({
        id: shortid(),
        listId,
        title,
        description,
      })
    );
    setTitle('');
    setDescription('');
  };

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
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
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
      <Button>Add list</Button>
    </form>
  );
};

export default ListsForm;

import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import shortid from 'shortid';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addColumn } from '../../redux/columnsRedux';

const ColumnForm = ({ listId }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [icon, setIcon] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addColumn({
        id: shortid(),
        listId,
        title,
        icon,
      })
    );
    setTitle('');
    setIcon('');
  };

  const Inputs = [
    {
      placeholder: 'Category',
      value: title,
      onChange: (e) => setTitle(e.target.value),
    },
    {
      placeholder: 'Icon',
      value: icon,
      onChange: (e) => setIcon(e.target.value),
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
      <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;

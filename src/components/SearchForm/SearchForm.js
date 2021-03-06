import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { filterCards } from '../../redux/searchRedux';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button';
import styles from './SearchForm.module.scss';

const SearchForm = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(filterCards({ search }));
    setSearch('');
  };

  useEffect(() => {
    dispatch(filterCards({ search: '' }));
  }, []);

  return (
    <form
      className={styles.searchForm}
      onSubmit={handleSubmit}
    >
      <TextInput
        placeholder='Search...'
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
      <Button>
        <span className='fa fa-search' />
      </Button>
    </form>
  );
};

export default SearchForm;

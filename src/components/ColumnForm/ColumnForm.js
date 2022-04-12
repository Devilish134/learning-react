import styles from './ColumnForm.module.scss';
import Button from '../Button/Button';
import { useState } from 'react';

const ColumnForm = props => {

  const [value, setValue] = useState('');
  const [icon, setIcon] = useState('')
  const handleSubmit = e => {
    e.preventDefault();
    props.action({ title: value, icon: icon });
    setValue('');
    setIcon('');
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit} >
        <span>Title</span><input className={styles.columnForm} type="text" 
                          value={value} onChange={e => setValue(e.target.value)} />
        <span>Icon</span><input className={styles.columnForm} type="text" 
                          value={icon} onChange={e => setIcon(e.target.value)} />
        <Button>Add column</Button>
    </form>
  );
};

export default ColumnForm;
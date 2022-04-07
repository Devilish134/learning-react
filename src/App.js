import Hero from './components/Hero/Hero'
import SearchForm from './components/SearchForm/SearchForm'
import List  from './components/List/List'
import './styles/normalize.scss';
import './styles/global.scss';

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default App;

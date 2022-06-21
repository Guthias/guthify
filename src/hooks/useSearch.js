import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { SearchContext } from '../context/SearchProvider';

export default function useSearch() {
  const { searchedValue, setSearchedValue } = useContext(SearchContext);
  const history = useHistory();

  const updateSearch = (value) => {
    setSearchedValue(value);
    history.push('/search');
  };

  return { searchedValue, updateSearch };
}

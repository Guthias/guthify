import { node } from 'prop-types';
import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export default function SearchProvider({ children }) {
  const [searchedValue, setSearchedValue] = useState('');

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <SearchContext.Provider value={{ searchedValue, setSearchedValue }}>
      { children }
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: node.isRequired,
};

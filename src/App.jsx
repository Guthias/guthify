import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import SearchProvider from './context/SearchProvider';

function App() {
  return (
    <SearchProvider>
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    </SearchProvider>
  );
}

export default App;

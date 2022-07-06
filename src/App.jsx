import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
import SearchProvider from './context/SearchProvider';
import MusicPlayerProvider from './context/MusicPlayerProvider';

function App() {
  return (
    <SearchProvider>
      <MusicPlayerProvider>
        <BrowserRouter>
          <Content />
        </BrowserRouter>
      </MusicPlayerProvider>
    </SearchProvider>
  );
}

export default App;

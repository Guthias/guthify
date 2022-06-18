import React, { useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';

export default function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searched, setSearched] = useState('');

  const handdleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  const searchAlbums = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const response = await searchAlbumsAPI(searchValue);

    const searchedValue = searchValue;

    setAlbums(response);
    setSearched(searchedValue);
    setSearchValue('');
    setIsLoading(false);
  };

  return (
    <main className="page-content">
      <form>
        <div>
          <input
            type="text"
            value={searchValue}
            onChange={handdleChange}
            placeholder="Pesquisar por um artista"
          />
          <button
            type="submit"
            onClick={searchAlbums}
          >
            Search
          </button>
        </div>
      </form>
      { isLoading
        ? <p>Carregando...</p>
        : <AlbumList albums={albums} search={searched} />}
    </main>
  );
}

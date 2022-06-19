import React, { useEffect, useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';
import useSearch from '../hooks/useSearch';

export default function Search() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { searchedValue } = useSearch();

  useEffect(() => {
    const fetchAlbum = async () => {
      setIsLoading(true);
      const response = await searchAlbumsAPI(searchedValue);
      setAlbums(response);
      setIsLoading(false);
    };
    fetchAlbum();
  }, [searchedValue]);

  return (
    <main className="page-content">
      { isLoading
        ? <p>Carregando...</p>
        : <AlbumList albums={albums} />}
    </main>
  );
}

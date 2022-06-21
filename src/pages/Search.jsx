import React, { useEffect, useState } from 'react';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import AlbumList from '../components/AlbumList';
import useSearch from '../hooks/useSearch';
import LocalLoading from '../components/LocalLoading';
import { MainContainer } from '../styles/main';

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
    <MainContainer>
      { isLoading
        ? <LocalLoading />
        : <AlbumList albums={albums} />}
    </MainContainer>
  );
}

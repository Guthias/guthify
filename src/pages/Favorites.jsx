import React, { useState, useEffect } from 'react';
import TrackList from '../components/TrackList';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import { MainContainer } from '../styles/main';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const results = await getFavoriteSongs();
      setFavorites(results);
    };
    fetchFavorites();
  }, [setFavorites]);

  return (
    <MainContainer>
      <TrackList musicList={favorites} onlyFavorites />
    </MainContainer>
  );
}

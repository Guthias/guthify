import React, { useState, useEffect } from 'react';
import TrackList from '../components/TrackList';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const results = await getFavoriteSongs();
      setFavorites(results);
    };
    fetchFavorites();
  });

  return (
    <div data-testid="page-favorites" className="page-content">
      <TrackList musicList={favorites} onlyFavorites />
    </div>
  );
}

import React, { useState, useEffect } from 'react';
import Prototypes from 'prop-types';
import MusicCard from './MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import LocalLoading from './LocalLoading';

export default function TrackList({ musicList, onlyFavorites }) {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      const data = await getFavoriteSongs();
      setFavorites(data);
      setLoading(false);
    };
    fetchFavorites();
  }, []);

  const toggleFavorite = async (id) => {
    const track = musicList.find(({ trackId }) => trackId === id);

    if (favorites.some(({ trackId }) => id === trackId)) {
      await removeSong(track);
    } else {
      await addSong(track);
    }

    const newFavorites = await getFavoriteSongs();
    setFavorites(newFavorites);
  };

  const checkFavorite = (id) => favorites.some(({ trackId }) => id === trackId);

  const tracks = onlyFavorites ? favorites : musicList;

  return (loading
    ? <LocalLoading />
    : (
      <div className="track-list">
        { tracks.map((track) => (
          <MusicCard
            key={track.previewUrl}
            trackDetails={track}
            toggleFavorite={toggleFavorite}
            isFavorited={checkFavorite(track.trackId)}
          />
        ))}
      </div>
    )
  );
}

TrackList.defaultProps = {
  onlyFavorites: false,
};

TrackList.propTypes = {
  musicList: Prototypes.arrayOf(Prototypes.shape({
    previewUrl: Prototypes.string.isRequired,
    trackName: Prototypes.string.isRequired,
    artworkUrl60: Prototypes.string.isRequired,
    artistName: Prototypes.string.isRequired,
    collectionName: Prototypes.string.isRequired,
    trackId: Prototypes.number.isRequired,
  })).isRequired,
  onlyFavorites: Prototypes.bool,
};

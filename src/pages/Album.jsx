import React, { useEffect, useState } from 'react';
import Prototypes from 'prop-types';
import { useParams } from 'react-router-dom';
import getMusics from '../services/musicsAPI';
import AlbumDetails from '../components/AlbumDetails';
import TrackList from '../components/TrackList';

export default function Album() {
  const [musicList, setMusicList] = useState([]);
  const [albumDetails, setAlbumDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchAlbumInfo = async () => {
      const response = await getMusics(id);
      const results = [...response];
      setAlbumDetails(results.shift());
      setMusicList(results);
      setLoading(false);
    };
    fetchAlbumInfo();
  }, []);

  return (loading
    ? <p>Carregando...</p>
    : (
      <main data-testid="page-album" className="page-content">
        <div className="page-album">
          <AlbumDetails {...albumDetails} />
          <TrackList musicList={musicList} />
        </div>
      </main>
    )
  );
}

Album.propTypes = {
  match: Prototypes.shape({
    params: Prototypes.shape({
      id: Prototypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

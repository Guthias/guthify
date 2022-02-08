import React, { Component } from 'react';
import Prototypes from 'prop-types';
import getMusics from '../services/musicsAPI';
import MusicCard from '../components/MusicCard';
import AlbumDetails from '../components/AlbumDetails';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class Album extends Component {
  state = {
    musicList: [],
    favorites: [],
    albumDetails: {},
    loading: true,
  }

  async componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const response = await getMusics(id);
    const results = [...response];
    const albumDetails = results.shift();
    const musicList = results;
    this.setState({
      musicList,
      albumDetails,
      loading: false,
      favorites: await getFavoriteSongs() });
  }

  handdleFavorite = async (id) => {
    this.setState({ loading: true });
    const { musicList, favorites } = this.state;
    const track = musicList.find(({ trackId }) => trackId === id);

    if (favorites.some(({ trackId }) => id === trackId)) {
      await removeSong(track);
    } else {
      await addSong(track);
    }

    this.setState({ favorites: await getFavoriteSongs(), loading: false });
  }

  checkFavorite = (id) => {
    const { favorites } = this.state;
    return favorites.some(({ trackId }) => id === trackId);
  }

  render() {
    const { musicList, albumDetails, loading } = this.state;
    return (loading
      ? <p>Carregando...</p>
      : (
        <main data-testid="page-album" className="page-content">
          <div className="page-album">
            <AlbumDetails { ...albumDetails } />
            <div className="track-list">
              { musicList.map((track) => (
                <MusicCard
                  key={ track.previewUrl }
                  { ...track }
                  onInputChange={ this.handdleFavorite }
                  isFavorited={ this.checkFavorite(track.trackId) }
                />
              ))}
            </div>
          </div>
        </main>
      )
    );
  }
}

Album.propTypes = { match: Prototypes.shape({
  params: Prototypes.shape({
    id: Prototypes.string.isRequired,
  }).isRequired,
}).isRequired };

import React, { Component } from 'react';
import Prototypes from 'prop-types';
import MusicCard from './MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';

export default class TrackList extends Component {
  state = {
    favorites: [],
    loading: true,
  }

  async componentDidMount() {
    this.setState({ favorites: await getFavoriteSongs(), loading: false });
  }

  handdleFavorite = async (id) => {
    this.setState({ loading: true });
    const { favorites } = this.state;
    const { musicList } = this.props;
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
    const { loading } = this.state;
    const { musicList } = this.props;

    return (loading
      ? <p>Carregando...</p>
      : (
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
      )
    );
  }
}

TrackList.propTypes = { musicList: Prototypes.arrayOf(PropTypes.shape({
  previewUrl: Prototypes.string.isRequired,
  trackName: Prototypes.string.isRequired,
  artworkUrl60: Prototypes.string.isRequired,
  artistName: Prototypes.string.isRequired,
  collectionName: Prototypes.string.isRequired,
  trackId: Prototypes.number.isRequired,
})).isRequired };

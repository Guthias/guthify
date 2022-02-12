import React, { Component } from 'react';
import TrackList from '../components/TrackList';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

export default class Favorites extends Component {
  state = {
    favorites: [],
  }

  async componentDidMount() {
    this.setState({ favorites: await getFavoriteSongs() });
  }

  render() {
    const { favorites } = this.state;
    return (
      <div data-testid="page-favorites" className="page-content">
        <TrackList musicList={ favorites } onlyFavorites />
      </div>
    );
  }
}

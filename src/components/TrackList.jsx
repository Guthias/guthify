import React, { Component } from 'react';
import MusicCard from './MusicCard';

export default class TrackList extends Component {
  render() {
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

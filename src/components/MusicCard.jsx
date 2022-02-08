import React, { Component } from 'react';
import Prototypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const {
      previewUrl,
      trackName,
      artworkUrl60,
      artistName,
      collectionName,
      trackId,
      onInputChange,
      isFavorited } = this.props;

    return (
      <div className="track">
        <div className="track-image-area">
          <img src={ artworkUrl60 } alt="" className="track-image" />
        </div>
        <span className="track-name">
          {trackName}
        </span>
        <span className="track-album">
          { artistName }
        </span>
        <span className="track-album">
          { collectionName }
        </span>

        <audio
          key={ previewUrl }
          data-testid="audio-component"
          src={ previewUrl }
          controls
        >
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
        </audio>

        <div className="favorite-album-area">
          <label htmlFor={ trackId }>
            <input
              id={ trackId }
              type="checkbox"
              checked={ isFavorited }
              onChange={ () => onInputChange(trackId) }
              data-testid={ `checkbox-music-${trackId}` }
            />
            Favorita
          </label>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  previewUrl: Prototypes.string.isRequired,
  trackName: Prototypes.string.isRequired,
  artworkUrl60: Prototypes.string.isRequired,
  artistName: Prototypes.string.isRequired,
  collectionName: Prototypes.string.isRequired,
  trackId: Prototypes.number.isRequired,
  onInputChange: Prototypes.func.isRequired,
  isFavorited: Prototypes.bool.isRequired,
};

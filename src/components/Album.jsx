import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Prototypes from 'prop-types';

export default class Album extends Component {
  render() {
    const {
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
    } = this.props;

    return (
      <Link
        to={ `/album/${collectionId}` }
        data-testid={ `link-to-album-${collectionId}` }
      >
        <div className="album">
          <div className="album-image-area">
            <img src={ artworkUrl100 } className="album-image" alt={ artistName } />
          </div>

          <div className="album-status-area">
            <span className="album-name">{ collectionName }</span>
            <span className="album-artist-name">{ artistName }</span>
          </div>
        </div>
      </Link>
    );
  }
}

Album.propTypes = {
  artistName: Prototypes.string.isRequired,
  collectionId: Prototypes.number.isRequired,
  collectionName: Prototypes.string.isRequired,
  artworkUrl100: Prototypes.string.isRequired,
};

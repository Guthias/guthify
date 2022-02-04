import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Album extends Component {
  render() {
    const {
      artistName,
      collectionId,
      collectionName,
      artworkUrl100,
      trackCount,
    } = this.props;

    return (
      <Link to={ `/album/${collectionId}` }>
        <div className="album">
          <div className="album-image-area">
            <img src={ artworkUrl100 } className="album-image" alt={ artistName } />
          </div>

          <div className="album-status-area">
            <span className="album-name">{ collectionName }</span>
            <span className="album-artist-name">{ artistName }</span>
            <span className="album-release-date">
              { trackCount }
              Songs
            </span>
          </div>
        </div>
      </Link>
    );
  }
}

import React, { Component } from 'react';
import Prototypes from 'prop-types';

export default class AlbumDetails extends Component {
  render() {
    const { artworkUrl100, collectionName, artistName, trackCount } = this.props;

    return (
      <div className="album-detail">
        <div className="album-detail-image">
          <img src={ artworkUrl100 } alt="" />
        </div>

        <div className="album-detail-status">
          <h3>{ collectionName }</h3>
          <h4>{ artistName }</h4>
          <span>{ `${trackCount} Songs` }</span>
        </div>
      </div>
    );
  }
}

AlbumDetails.propTypes = {
  artistName: Prototypes.string.isRequired,
  trackCount: Prototypes.number.isRequired,
  collectionName: Prototypes.string.isRequired,
  artworkUrl100: Prototypes.string.isRequired,
};

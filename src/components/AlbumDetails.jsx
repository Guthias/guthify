import React, { Component } from 'react';

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

import React from 'react';
import Prototypes from 'prop-types';

export default function AlbumDetails({
  artworkUrl100, collectionName, artistName, trackCount,
}) {
  return (
    <div className="album-detail">
      <div className="album-detail-image">
        <img src={artworkUrl100} alt="" />
      </div>

      <div className="album-detail-status">
        <h3 data-testid="album-name">{ collectionName }</h3>
        <h4 data-testid="artist-name">{ artistName }</h4>
        <span>{ `${trackCount} Songs` }</span>
      </div>
    </div>
  );
}

AlbumDetails.propTypes = {
  artistName: Prototypes.string.isRequired,
  trackCount: Prototypes.number.isRequired,
  collectionName: Prototypes.string.isRequired,
  artworkUrl100: Prototypes.string.isRequired,
};

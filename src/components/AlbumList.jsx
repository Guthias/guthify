import React, { Component } from 'react';
import Prototypes from 'prop-types';
import Album from './Album';

export default class AlbumList extends Component {
  render() {
    const { albums } = this.props;
    return (
      albums.length === 0 ? <p>Nenhum álbum foi encontrado</p>
        : (
          <div className="album-list">
            { albums.map((album) => <Album key={ album.collectionId } { ...album } />) }
          </div>
        )
    );
  }
}

AlbumList.propTypes = {
  albums: Prototypes.arrayOf(Prototypes.shape({
    artistName: Prototypes.string.isRequired,
    collectionId: Prototypes.number.isRequired,
    collectionName: Prototypes.string.isRequired,
    artworkUrl100: Prototypes.string.isRequired,
  })).isRequired,
};
